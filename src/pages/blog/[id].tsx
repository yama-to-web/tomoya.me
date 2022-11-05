import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import moment from 'moment';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Link as ScLink } from 'react-scroll/modules';
import BreadCrumb from 'components/BreadCrumb';
import Main from 'components/layouts/blog/Main';
import { microcms } from 'lib/client';
import type { ArticleType } from 'types/index';
import 'highlight.js/styles/tokyo-night-dark.css';

type Props = {
  article: ArticleType;
};

const Article: NextPage<Props> = ({ article }: Props) => {
  return (
    <Main article={article}>
      {/* TOC */}
      {article.toc.length > 0 && (
        <div
          id="toc"
          className="fixed top-1/4 left-[calc(50%_-_768px)] ml-20 hidden max-w-sm rounded-lg font-extralight text-slate-500 xl:block"
        >
          <h4 className="mb-3 py-3 text-slate-500">目次</h4>
          <ul>
            {article.toc.map((data, index) => {
              return (
                <li key={index} className={`text-sm leading-7 text-gray-400 ${data.name}`}>
                  <ScLink
                    activeClass="active"
                    to={data.id}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    className="px-2 hover:cursor-pointer"
                  >
                    {data.text}
                  </ScLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="max-w-6xl overflow-hidden">
        {/* パンくず */}
        <BreadCrumb
          lists={[
            {
              name: 'Home',
              path: '/',
            },
            {
              name: 'Blog',
              path: '/blog',
            },
            {
              name: article.title,
            },
          ]}
        />
        {/* サムネイル */}
        <Image
          width={3000}
          height={1500}
          className="h-full w-full object-cover shadow-sm lg:rounded-2xl"
          src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
          alt={`${article.title}のイメージ`}
        />
        <div className="mt-8 px-5 sm:mt-16">
          {/* タイトル */}
          <h1 className="mb-8 text-3xl font-semibold xl:text-4xl">{article.title}</h1>
          {/* タグ */}
          {article.tags.length > 0 && (
            <ul className="mt-4 flex items-center justify-start">
              {article.tags.map((tag) => {
                return (
                  <li
                    className="mr-1 rounded-xl border border-teal-500 py-1 px-2 text-xs font-semibold text-teal-500"
                    key={tag}
                  >
                    <FontAwesomeIcon size="sm" icon={faTag as IconProp} />
                    {tag}
                  </li>
                );
              })}
            </ul>
          )}
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
          {/* 本文 */}
          <div
            className="prose mt-20 rounded"
            dangerouslySetInnerHTML={{ __html: `${article.body}` }}
          />
        </div>
      </div>
    </Main>
  );
};

export default Article;

export const getStaticPaths = async () => {
  const data = await microcms.get({ endpoint: 'blogs', queries: { limit: 9999 } });

  const paths = data.contents.map((content: { id: string }) => `/blog/${content.id}`);
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
  console.log(headings);

  const toc = headings.map((item) => ({
    text: (item.children[0] as { data: string }).data,
    id: item.attribs.id,
    name: item.name,
  }));

  articles['toc'] = toc;
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
    },
  };
};
