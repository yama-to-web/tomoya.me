import '@fortawesome/fontawesome-svg-core/styles.css';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { load } from 'cheerio';
import hljs from 'highlight.js';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { Link as ScLink } from 'react-scroll';
import Main from '../../components/layouts/blog/Main';
import { client } from '../../lib/client';
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
      <div className="mx-auto" id="micro_cms_article">
        <div className="overflow-hidden mx-auto max-w-6xl bg-gray-50 sm:rounded">
          <Image
            width={3000}
            height={1500}
            className="object-cover w-full h-full shadow-sm"
            src={article.eyecatch ? article.eyecatch.url : '/no_image.png'}
            alt={`${article.title}のイメージ`}
          />
          <div className="p-5">
            <h1 className="my-4 text-xl font-semibold md:text-3xl lg:text-3xl xl:text-4xl">
              {article.title}
            </h1>
            {article.tags.length > 0 && (
              <ul className="flex justify-start items-center mt-4 text-sm">
                {article.tags.map((tag) => {
                  return (
                    <li
                      className="py-1 px-2 mr-1 text-xs font-semibold text-teal-500 rounded-xl border border-teal-500"
                      key={tag}
                    >
                      <FontAwesomeIcon size="sm" icon={faTag} />
                      {tag}
                    </li>
                  );
                })}
              </ul>
            )}

            {/* TOC */}
            {article.toc.length > 0 && (
              <div className="pb-5 mt-16 max-w-md bg-indigo-50 rounded-xl border-4 border-teal-400">
                <h4 className="p-3 mb-3 text-lg font-bold text-center text-white bg-teal-400">
                  目次
                </h4>
                <ul>
                  {article.toc.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-base text-gray-500 font-semibold leading-8 border-b-1 before:mr-2 before:text-gray-400 before:content-['-'] ${data.name}`}
                      >
                        <ScLink
                          activeClass="active"
                          to={data.id}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          className="hover:cursor-pointer"
                        >
                          {data.text}
                        </ScLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {/* 本文 */}
            <div
              className="mt-20 text-sm text-gray-700 rounded prose"
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
