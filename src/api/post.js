import { API_URL } from '../constants/api';

export const getPost = async (postId) => {
  try {
    const response = await fetch(`${API_URL}/posts/${postId}?populate=*`);
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
