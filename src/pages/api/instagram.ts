import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const INSTAGRAM_ACCESS_TOKEN = process.env.INSTA_GRAPH_API_KEY;
const limit = 6;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v14.0/17841450072012853?fields=media.limit(${limit}){media_url,permalink}&access_token=${INSTAGRAM_ACCESS_TOKEN}`,
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Instagram API' });
  }
}
