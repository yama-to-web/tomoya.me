import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { NextApiRequest, NextApiResponse } from 'next';
import { microcms } from 'lib/client';

type QueryType = {
  id: string;
  draftKey: string;
};

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as QueryType;
  if (!query.id || !query.draftKey) {
    return res?.status(404).end();
  }
  const queries: MicroCMSQueries = {
    draftKey: query.draftKey,
  };
  const content = await microcms.get({
    endpoint: 'blogs',
    contentId: query.id,
    queries: queries,
  });

  if (!content) {
    return res?.status(401).json({ message: 'Invalid ID' });
  }

  res.setPreviewData(queries);
  res.writeHead(307, {
    Location: `/blog/${content.category ? content.category[0] + '/' : ''}${content.id}`,
  });
  res.end('Preview mode enabled');
};

export default preview;
