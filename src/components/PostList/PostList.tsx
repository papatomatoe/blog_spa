import { FC } from 'react';
import PostItem from '../PostItem';
import styles from './PostList.module.css';
import { PostListProps } from './types';

const PostList: FC<PostListProps> = ({ posts, isMarkFirstPost = false }) => {
  if (!posts?.length) return <p>No posts</p>;
  return (
    <ul className={styles.posts__list}>
      {posts.map(({ id, title, desktopImage, mobileImage, epigraph, date }, idx) => (
        <li key={id} className={styles.posts__item}>
          <PostItem
            title={title}
            desktopImage={desktopImage}
            mobileImage={mobileImage}
            epigraph={epigraph}
            date={date}
            isMarked={idx === 0 && isMarkFirstPost}
          />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
