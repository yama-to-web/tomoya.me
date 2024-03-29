import useSWR from 'swr';
import type { InstaImgType } from 'types/index';

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
}

export function useInstagram() {
  const { data, error } = useSWR('/api/instagram', fetcher);
  const images: Array<InstaImgType> = !error
    ? data?.media?.data.filter((media: InstaImgType) =>
        ['IMAGE', 'CAROUSEL_ALBUM'].includes(media.media_type),
      )
    : [];

  return {
    data: images,
    isLoading: !error && !data,
    isError: error,
  };
}
