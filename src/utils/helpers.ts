import { IPost } from 'types/post';

const sortPostsByDate = (posts: IPost[]) =>
  posts?.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

export const getPostsForHomePage = (posts: IPost[]) => {
  // throw new Error(''); // TThrow error for test ErrorBoundary
  return sortPostsByDate(posts).slice(0, 3);
};

export const searchByTitlePosts = (posts: IPost[], value: string) =>
  sortPostsByDate(posts).filter((el) => el.title.trim().toLowerCase().includes(value.toLowerCase()));

export const getFormattedDate = (date: string) => {
  const dataObject = new Date(date);

  return new Intl.DateTimeFormat('ru-RU').format(dataObject);
};
