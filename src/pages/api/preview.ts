import type { MicroCMSContentId } from 'microcms-js-sdk';
import type { NextApiResponse } from 'next';
import { microcms } from 'lib/client';

type Props = {
  query: QueryType;
  res: NextApiResponse;
};
type QueryType = {
  id: MicroCMSContentId;
  draftKey: string;
};

const preview = async ({ query, res }: Props) => {
  if (!query?.id && !query?.draftKey) {
    return res.status(404).end();
  }
  const id = query?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const queries = {
    draftKey: query?.draftKey,
  };
  const content = await microcms.get({
    endpoint: 'blogs',
    contentId: idExceptArray,
    queries: queries,
  });

  if (!content) {
    return res?.status(401).json({ message: 'Invalid ID' });
  }

  res.setPreviewData(queries);
  res.writeHead(307, { Location: `/blog/${content.id}` });
  res.end('Preview mode enabled');
};

export default preview;
