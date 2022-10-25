import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImage?: string;
};

const CommonMeta = ({ pageTitle, pageDescription, pagePath, pageImage }: Props) => {
  const router = useRouter();
  const domain = 'tomoya.me';
  const defaultTitle = 'tomoya.me';
  const defaultDescription =
    'WEBエンジニア　Tomoya Fujiwara（藤原 智弥）のポートフォリオサイトです。This site is portfolio of Japan-based Web Engineer Tomoya Fujiwara';
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath ? pagePath : router.asPath;
  const image = pageImage ? pageImage : 'https://' + domain + '/title.png';

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
      <meta property="og:url" content={'https://' + domain + url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="WEBエンジニア　Tomoya Fujiwara（藤原 智弥）のポートフォリオサイトです。This site is portfolio of Japan-based Web Engineer Tomoya Fujiwara"
      />
      <meta name="google-site-verification" content="W-6eEjc2_Sg7Wb0-Ky_uME_ZGe1LR9amK8hEJ2NNimw" />
    </Head>
  );
};

export default CommonMeta;
