import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from 'react-share';
import type { ArticleType } from 'types/index';

type Props = {
  article: ArticleType;
};

const ShareBtn = ({ article }: Props) => {
  return (
    <div className="flex gap-3">
      <TwitterShareButton
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.category}/${article.id}`}
        title={article.title}
        hashtags={article.tags}
      >
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.category}/${article.id}`}
        title={article.title}
      >
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <LineShareButton
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.category}/${article.id}`}
        title={article.title}
      >
        <LineIcon size={32} round={true} />
      </LineShareButton>
    </div>
  );
};

export default ShareBtn;
