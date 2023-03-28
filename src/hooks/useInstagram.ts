import useSWR from 'swr';
import type { InstaImg } from 'types/index';

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
}

export function useInstagram() {
  const { data, error } = useSWR('/api/instagram', fetcher);
  const images: Array<InstaImg> = !error ? data?.media?.data : [];
  return {
    data: images,
    isLoading: !error && !data,
    isError: error,
  };
}
