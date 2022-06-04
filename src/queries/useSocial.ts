import { useQuery } from 'react-query';
import { ISocial } from 'types/social';
import { getSocials } from '../api/socials';

export const useSocial = () => useQuery<ISocial[]>('social', getSocials);
