import { load } from 'cheerio';
import hljs from 'highlight.js';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import moment from 'moment';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BreadCrumb from 'components/BreadCrumb';
import IconTags from 'components/IconTags';
import CategoryLabel from 'components/blog/CategoryLabel';
import ShareBtn from 'components/blog/ShareBtn';
import Toc from 'components/blog/Toc';
import Main from 'components/blog/article/Main';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';
import 'highlight.js/styles/tokyo-night-dark.css';

type Props = {
  article: ArticleType;
  toc: [
    {
      text: string;
      id: string;
      name: string;
    },
  ];
};

const Article: NextPage<Props> = ({ article, toc }: Props) => {
  return (
    <Main article={article}>
      {/* 目次（PC） */}
      <aside className="sticky top-1/4 hidden h-fit w-full max-w-sm font-extralight text-slate-500 xl:block">
        {toc.length > 0 && <Toc toc={toc} setActive />}
      </aside>
      {/* コンテンツ */}
      <div className="w-full max-w-3xl overflow-hidden">
        {/* サムネイル */}
        <div className="mb-2 max-w-3xl lg:h-[400px]">
          <Image
            width={1500}
            height={1000}
            className="h-full w-full object-cover text-center shadow-sm sm:rounded-xl"
            src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
            alt={`${article.title}のイメージ`}
          />
        </div>
        {/* パンくず */}
        <BreadCrumb
          lists={[
            {
              name: 'Blog',
              path: '/blog',
            },
            {
              name: article.category[0].charAt(0).toUpperCase() + article.category[0].slice(1),
              path: '/blog/' + article.category,
            },
          ]}
        />
        <div className="mt-3 px-4">
          {/* タイトル */}
          <h1 className="my-5 text-2xl font-semibold xl:text-3xl">{article.title}</h1>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {/* カテゴリ */}
            <Link href={`/blog/${article.category}`}>
              <CategoryLabel category={article.category} />
            </Link>
            {/* タグ */}
            <IconTags tags={article.tags} />
          </div>
          {/* 公開日 */}
          <div className="my-2 flex items-center">
            <span className="text-xs text-gray-400">
              公開日：{moment(article.createdAt).format('YYYY.MM.DD')}
            </span>
          </div>
          {/* シェアボタン */}
          <div className="flex justify-end">
            <ShareBtn article={article} />
          </div>
          {/* 目次（SP） */}
          {toc.length > 0 && (
            <div className="mt-5 rounded-lg bg-gray-100 p-5 xl:hidden">
              <Toc toc={toc} />
            </div>
          )}
          {/* 本文 */}
          <div
            className="prose mb-32 mt-10 max-w-3xl rounded"
            dangerouslySetInnerHTML={{ __html: `${article.body}` }}
          />
          {/* タグ */}
          <IconTags tags={article.tags} />
          <div className="mt-10 grid place-content-center place-items-center gap-2 sm:place-content-end">
            <p className="text-xs text-gray-500 before:mr-1 before:content-['＼'] after:ml-1 after:content-['／']">
              記事をシェアする
            </p>
            <ShareBtn article={article} />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Article;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await microcms.get({
    endpoint: 'blogs',
    queries: { limit: 9999 },
  });
  const paths = data.contents.map(
    (content: { id: string; category: string }) =>
      `/blog/${content.category ? content.category[0] + '/' : ''}${content.id}`,
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const queries = ctx.previewData as MicroCMSQueries;
  const articles = await microcms.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
    queries: queries,
  });

  const $ = load(articles.body);
  const headings = $('h1, h2, h3').toArray();
  // 目次
  const toc = headings.map((item) => ({
    text: (item.children[0] as { data: string }).data,
    id: item.attribs.id,
    name: item.name,
  }));

  // コードハイライト
  $('code').each((_, elm) => {
    const langClass = elm.attribs.class;
    const langSet = langClass != undefined ? [langClass.replace('language-', '')] : langClass;
    const result = hljs.highlightAuto($(elm).text(), langSet);
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });
  articles['body'] = $.html();

  return {
    props: {
      article: articles,
      toc: toc,
    },
  };
};
