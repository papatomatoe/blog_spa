import { FC } from 'react';
import cn from 'classnames';
import { marked } from 'marked';
import Image from 'components/Image';
import styles from './PostItem.module.css';
import { PostItemProps } from './types';
import { getFormattedDate } from 'utils/helpers';
import Button from '../Button';
const PostItem: FC<PostItemProps> = ({ id, title, desktopImage, mobileImage, epigraph, date, isMarked = false }) => {
  return (
    <>
      <h3
        className={cn(styles.posts__title, {
          [styles.posts__title__marked]: isMarked,
        })}
      >
        {title}
      </h3>
      <div className={styles.posts__wrapper}>
        <Image className={styles.image} alt={title} desktopImage={desktopImage} mobileImage={mobileImage} />
        <div className={styles.posts__content} dangerouslySetInnerHTML={{ __html: marked.parse(epigraph) }} />
      </div>
      <div className={styles.posts__bottom}>
        <time className={styles.posts__date} dateTime={date}>
          {getFormattedDate(date)}
        </time>
        <Button className={styles.posts__read} type="link" href={`/posts/${id}`}>
          Read Post
        </Button>
      </div>
    </>
  );
};

export default PostItem;
