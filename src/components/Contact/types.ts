import { ReactNode } from 'react';

export interface ContactProps {
  label: string;
  link: string;
  children: ReactNode;
  type: 'tel' | 'email';
}
