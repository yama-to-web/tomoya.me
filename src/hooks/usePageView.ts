import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { existsGaId, pageview } from 'lib/gtag';

type urlPath = {
  path: string;
};

export default function usePageView() {
  const router = useRouter();

  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (path: urlPath) => {
      pageview(path);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}
