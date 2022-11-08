import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImage?: string;
  jsonLd?: string;
};

const CommonMeta: NextPage<Props> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImage,
  jsonLd,
}: Props) => {
  const router = useRouter();
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const defaultDescription =
    'WEBエンジニア　Tomoya Fujiwara（藤原 智弥）のポートフォリオサイトです。This site is portfolio of Japan-based Web Engineer Tomoya Fujiwara';
  const title = pageTitle ? `${pageTitle} | ${siteName}` : siteName;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath ? pagePath : router.asPath;
  const image = pageImage ? pageImage : process.env.NEXT_PUBLIC_SITE_URL + '/title.png';

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
      />
      <meta name="author" content="Tomoya Fujiwara" />
      <meta property="description" content={description} />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL + url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={siteName} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="google-site-verification" content="W-6eEjc2_Sg7Wb0-Ky_uME_ZGe1LR9amK8hEJ2NNimw" />
      {jsonLd && (
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      )}
    </Head>
  );
};

export default CommonMeta;
