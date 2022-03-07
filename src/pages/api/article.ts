import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await fetch(
    'https://note.com/api/v2/creators/yama_to_web/contents?kind=note&page=1',
  );
  const posts = await data.json();

  res.status(200).json(posts);
}
