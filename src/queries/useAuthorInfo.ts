import { useQuery } from 'react-query';
import { IAuthor } from 'types/author';
import { getAuthorInfo } from 'api/authorInfo';

export const useAuthorInfo = () => useQuery<IAuthor>('authorInfo', getAuthorInfo);
