import { useQuery } from 'react-query';
import { getPost } from 'api/post';
import { IPost } from 'types/post';

export const usePost = (postId: number) => useQuery<Omit<IPost, 'epigraph'>>(['post', postId], () => getPost(postId));
