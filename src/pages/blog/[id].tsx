import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import moment from 'moment';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Link as ScLink } from 'react-scroll';
import Main from 'components/layouts/blog/Main';
import { client } from 'lib/client';
import 'highlight.js/styles/tokyo-night-dark.css';

type Props = {
  article: Article;
};
type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tags: [string];
  toc: [
    {
      text: string;
      id: string;
      name: string;
    },
  ];
};

export default function Article({ article }: Props) {
  return (
    <Main title={article.title}>
      {/* TOC */}
      {article.toc.length > 0 && (
        <div
          id="toc"
          className="hidden fixed top-1/4 left-[calc(50%_-_768px)] ml-20 max-w-sm font-extralight text-slate-500 rounded-lg xl:block"
        >
          <h4 className="py-3 mb-3 text-slate-500">目次</h4>
          <ul>
            {article.toc.map((data, index) => {
              return (
                <li key={index} className={`text-sm text-gray-400 leading-7 ${data.name}`}>
                  <ScLink
                    activeClass="active"
                    to={data.id}
                    spy={true}
                    smooth={true}
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
      <div className="mx-auto">
        <div className="overflow-hidden max-w-6xl sm:rounded">
          <Image
            width={3000}
            height={1500}
            className="object-cover w-full h-full shadow-sm"
            src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
            alt={`${article.title}のイメージ`}
          />
          <div className="px-5 mt-16">
            <h1 className="mb-8 text-3xl font-semibold xl:text-4xl">{article.title}</h1>
            {article.tags.length > 0 && (
              <ul className="flex justify-start items-center mt-4">
                {article.tags.map((tag) => {
                  return (
                    <li
                      className="py-1 px-2 mr-1 text-xs font-semibold text-teal-500 rounded-xl border border-teal-500"
                      key={tag}
                    >
                      <FontAwesomeIcon size="sm" icon={faTag as IconProp} />
                      {tag}
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="flex items-center my-2">
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
              className="mt-20 rounded prose"
              dangerouslySetInnerHTML={{ __html: `${article.body}` }}
            />
          </div>
        </div>
      </div>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const queries: MicroCMSQueries = {
    draftKey: ctx.query?.draftKey as string,
    filters: ctx.query?.filters as string,
  };
  const articles = await client.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
    queries: queries,
  });
  console.log(articles);

  const $ = load(articles.body);
  const headings = $('h1, h2, h3').toArray();
  // 目次
  const toc = headings.map((item) => ({
    text: (item.children[0] as any).data,
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
