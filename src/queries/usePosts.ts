import { useQuery } from 'react-query';
import { getPosts } from 'api/posts';
import { IPost } from 'types/post';

export const usePosts = () => useQuery<IPost[]>('posts', getPosts);
