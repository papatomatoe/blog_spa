import { FC } from 'react';
import Section from '../../components/Section';
import PostList from '../../components/PostList';
import Button from '../../components/Button';
import AuthorInfo from '../../components/AuthorInfo';
import styles from './HomePage.module.css';
import { useAuthorInfo } from '../../queries/useAuthorInfo';
import { usePosts } from '../../queries/usePosts';
import { getPostsForHomePage } from '../../utils/helpers';
import ErrorBoundary from '../../components/ErrorBoundary';
const HomePage: FC = () => {
  const { isLoading: isLoadingAuthorInfo, isError: isErrorAuthorInfo, data: authorInfo } = useAuthorInfo();
  const { isLoading: isLoadingPosts, isError: isErrorPosts, data: posts } = usePosts();

  const filteredPosts = posts && getPostsForHomePage(posts);

  if (isLoadingAuthorInfo || isLoadingPosts) return <p>Loading...</p>;
  if (isErrorAuthorInfo || isErrorPosts) return <p>Error</p>;

  return (
    <>
      {authorInfo && (
        <Section className={styles.aboutSection} title={authorInfo.title}>
          <AuthorInfo
            title={authorInfo.title}
            desktopImage={authorInfo.desktopImage}
            mobileImage={authorInfo.mobileImage}
            description={authorInfo.description}
          />
        </Section>
      )}
      <Section title="Posts">
        <PostList posts={filteredPosts} />
        <Button type="link" href="/posts" className={styles.toPosts}>
          To Posts
        </Button>
      </Section>
    </>
  );
};

export default HomePage;
