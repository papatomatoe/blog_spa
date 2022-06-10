import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { usePost } from '../../queries/usePost';
import Image from '../../components/Image';
import { getFormattedDate } from '../../utils/helpers';
import { marked } from 'marked';
import styles from './PostPage.module.css';
import Button from '../../components/Button';
const PostPage: FC = () => {
  const params = useParams();

  const { isLoading, isError, data: post } = usePost(Number(params.postId));

  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  if (!post) return <p>No post data...</p>;

  return (
    <article className={styles.post}>
      <h1 className={styles.post__title}>{post.title}</h1>
      <Image
        className={styles.post__image}
        desktopImage={post.desktopImage}
        mobileImage={post.mobileImage}
        alt={post.title}
      />
      <time className={styles.post__date} dateTime={post.date}>
        {getFormattedDate(post.date)}
      </time>
      <div className={styles.post__content} dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />

      <Button className={styles.post__back} type="link" href="/posts">
        Go Back
      </Button>
    </article>
  );
};

export default PostPage;
