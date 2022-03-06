// import Image from 'next/image';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/components/article.module.scss';

type Props = {
  key: number;
  noteUrl: string;
  eyecatch: string;
  name: string;
  body: string;
  likeCount: number;
  publishAt: string;
};

const Article = (props: Props) => {
  return (
    <div className={styles.article}>
      <a className={styles.atc_link} href={props.noteUrl} rel="noreferrer">
        <div className={styles.atc_eyecatch}>
          {/* Image moduleがSSG対応していないため */}
          <img src={props.eyecatch} width="1280" height="670" alt="" />
        </div>
        <div className={styles.atc_body}>
          <p className={styles.atc_ttl}>{props.name}</p>
          <p className={styles.atc_description}>{props.body}</p>
        </div>
        <div className={styles.atc_suki}>
          <div className={styles.suki_icon}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className={styles.suki_label}>{props.likeCount}</div>
        </div>
        <div className={styles.publish_at}>{props.publishAt}</div>
      </a>
    </div>
  );
};

export default Article;
