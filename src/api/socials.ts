import { ISocial } from 'types/social';
import { API_URL } from '../constants/api';

const getAdaptedSocials = (response: any): ISocial[] => {
  return response.map((el: any) => ({
    id: el.id,
    title: el.attributes.title,
    link: el.attributes.link,
    icon: el.attributes.icon.data.attributes.url,
  }));
};

export const getSocials = async (): Promise<ISocial[]> => {
  const response = await fetch(`${API_URL}/socials?populate=*`);
  const data = await response.json();
  return data.data ? getAdaptedSocials(data.data) : data;
};
