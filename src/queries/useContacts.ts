import { useQuery } from 'react-query';
import { IContacts } from 'types/contacts';
import { getContacts } from '../api/contact';

export const useContacts = () => useQuery<IContacts>('contacts', getContacts);
