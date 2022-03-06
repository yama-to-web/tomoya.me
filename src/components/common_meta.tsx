import Head from 'next/head';

type Props = {
  pageTitle: string;
  pageDescription: string;
  pagePath: string;
};

const CommonMeta = ({ pageTitle, pageDescription, pagePath }: Props) => {
  const defaultTitle = 'demo';
  const defaultDescription = 'demo';
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath;

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
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Tomoya Fujiwara（藤原 智弥）Portfolio Site |" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.SITE_URL}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="tomoya.me" />
      <meta name="twitter:title" content="Tomoya Fujiwara（藤原 智弥）Portfolio Site" />
      <meta
        name="twitter:description"
        content="WEBエンジニアTomoya Fujiwara（藤原 智弥）のポートフォリオサイトです。This site is portfolio of Japan-based Web Engineer Tomoya Fujiwara"
      />
      <meta name="google-site-verification" content="W-6eEjc2_Sg7Wb0-Ky_uME_ZGe1LR9amK8hEJ2NNimw" />
      <link rel="stylesheet" href="https://use.typekit.net/uht4tfc.css" />
    </Head>
  );
};

export default CommonMeta;
