import { IContacts } from 'types/contacts';
import { API_URL } from '../constants/api';

const getAdaptedContacts = (data: any): IContacts => ({
  email: data.data.attributes.email,
  phone: data.data.attributes.phone,
});

export const getContacts = async (): Promise<IContacts> => {
  const response = await fetch(`${API_URL}/contact?populate=*`);
  const data = await response.json();
  return getAdaptedContacts(data);
};
