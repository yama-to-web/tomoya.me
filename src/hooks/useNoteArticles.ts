import useSWR from 'swr';

async function fetcher(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error fetching data');
  }
  return response.json();
}

export function useInstagram() {
  const { data, error } = useSWR('/api/note', fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
