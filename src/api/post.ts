import { IPost } from 'types/post';
import { API_URL } from '../constants/api';

const getAdaptedPostData = (data: any): Omit<IPost, 'epigraph'> => ({
  id: data.id,
  date: data.attributes.publishedAt,
  content: data.attributes.content,
  title: data.attributes.title,
  desktopImage: data.attributes.desktop.data.attributes.url,
  mobileImage: data.attributes.mobile.data.attributes.url,
});

export const getPost = async (postId: number): Promise<IPost> => {
  const response = await fetch(`${API_URL}/posts/${postId}?populate=*`);
  if (!response.ok) {
    throw new Error('Something went wrong...');
  }
  const data = await response.json();

  const post = data.data ? getAdaptedPostData(data.data) : data;

  return post;
};
