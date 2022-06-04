import { FC, useState, ChangeEvent } from 'react';
import PostList from '../../components/PostList';
import Section from '../../components/Section';
import { usePosts } from '../../queries/usePosts';
import styles from './PostsPage.module.css';
import { searchByTitlePosts } from '../../utils/helpers';
const PostsPage: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data: posts, isError, isLoading } = usePosts();

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const filteredPosts = posts && searchByTitlePosts(posts, searchValue);

  if (isError) return <p>Error</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Section title="Recent posts">
      <input className={styles.search} type="text" placeholder="Search" value={searchValue} onChange={searchHandler} />
      <PostList posts={filteredPosts} isMarkFirstPost={true} />
    </Section>
  );
};

export default PostsPage;
