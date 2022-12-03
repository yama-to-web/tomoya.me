import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import moment from 'moment';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Image from 'next/image';
import BreadCrumb from 'components/BreadCrumb';
import Main from 'components/blog/Main';
import ShareBtn from 'components/blog/ShareBtn';
import Toc from 'components/blog/Toc';
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
      {/* TOC */}
      {toc.length > 0 && <Toc toc={toc} />}
      {/* コンテンツ */}
      <div className="overflow-hidden lg:max-w-6xl">
        {/* パンくず */}
        <BreadCrumb
          lists={[
            {
              name: 'Blog',
              path: '/blog',
            },
            {
              name: article.category,
              path: '/blog/' + article.category,
            },
            {
              name: article.title,
            },
          ]}
        />
        {/* サムネイル */}
        <div className="lg:h-[400px] lg:w-[800px]">
          <Image
            width={1500}
            height={1000}
            className="h-full w-full max-w-6xl object-cover text-center shadow-sm lg:rounded-2xl"
            src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
            alt={`${article.title}のイメージ`}
          />
        </div>
        <div className="mt-8 px-4 sm:mt-16">
          {/* タイトル */}
          <h1 className="mb-2 text-2xl font-semibold xl:text-3xl">{article.title}</h1>
          {/* 公開日 */}
          <div className="my-2 flex items-center">
            <FontAwesomeIcon
              size="xs"
              style={{ marginRight: '0.2rem' }}
              icon={faClock as IconProp}
              color={'gray'}
            />
            <span className="text-xs text-gray-400">
              {moment(article.createdAt).format('YYYY.MM.DD')}
            </span>
          </div>
          {/* シェアボタン */}
          <div className="flex justify-end">
            <ShareBtn article={article} />
          </div>
          {/* 本文 */}
          <div
            className="prose mb-32 mt-16 rounded sm:mt-20"
            dangerouslySetInnerHTML={{ __html: `${article.body}` }}
          />
          {/* タグ */}
          {article.tags.length > 0 && (
            <ul className="flex items-center justify-start">
              {article.tags.map((tag) => {
                return (
                  <li
                    className="mr-1 rounded-md border border-teal-600 py-1 px-2 text-xs font-semibold text-teal-600"
                    key={tag}
                  >
                    #{tag}
                  </li>
                );
              })}
            </ul>
          )}
          <div className="my-5 flex justify-center sm:justify-end">
            <div className="flex flex-col items-center gap-2">
              <p>この記事をシェアする</p>
              <ShareBtn article={article} />
            </div>
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
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
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
