import { IAuthor } from 'types/author';
import { API_URL } from '../constants/api';

const getAdaptedAuthorInfoData = (data: any): IAuthor => {
  return {
    title: data.attributes.title,
    description: data.attributes.description,
    fullDescription: data.attributes.fullDescription,
    desktopImage: data.attributes.desktop.data.attributes.url,
    mobileImage: data.attributes.mobile.data.attributes.url,
  };
};

export const getAuthorInfo = async (): Promise<IAuthor> => {
  const response = await fetch(`${API_URL}/author?populate=*`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  const data = await response.json();

  const authorInfo = data.data ? getAdaptedAuthorInfoData(data.data) : data;

  return authorInfo;
};
