import '@fortawesome/fontawesome-svg-core/styles.css';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { load } from 'cheerio';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { GetServerSideProps } from 'next';
import { Link as ScLink } from 'react-scroll';
import Main from '../../components/layouts/blog/Main';
import { client } from '../../lib/client';

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
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  tags: string;
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
          <img className="object-cover w-full h-full shadow-sm" src={article.eyecatch.url} />
          <div className="p-5">
            <div className="my-4 text-xl font-bold md:text-3xl lg:text-3xl xl:text-4xl">
              {article.title}
            </div>
            {article.tags && (
              <div className="flex justify-start items-center mt-4 text-sm">
                <div className="py-1 px-2 font-bold text-white bg-teal-400 rounded-3xl">
                  <FontAwesomeIcon size="sm" icon={faTag} />
                  {article.tags}
                </div>
              </div>
            )}

            <div className="mt-16">
              {/* TOC */}
              <div className="p-5 mb-10 bg-indigo-50">
                <h4 className="mb-3 text-lg font-bold">目次</h4>
                <ul>
                  {article.toc.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={`text-sm leading-8 border-b-1 before:mr-2 before:text-gray-400 before:content-['-'] ${data.name}`}
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
              <div
                className="mt-4 text-gray-700 rounded prose md:text-lg"
                dangerouslySetInnerHTML={{ __html: `${article.body}` }}
              />
            </div>
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

  const toc = headings.map((item) => ({
    text: (item.children[0] as any).data,
    id: item.attribs.id,
    name: item.name,
  }));
  articles['toc'] = toc;

  return {
    props: {
      article: articles,
    },
  };
};
