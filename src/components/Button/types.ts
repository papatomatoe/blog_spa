import { HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  className?: string;
  buttonProps?: HTMLAttributes<HTMLButtonElement>;
  linkProps?: HTMLAttributes<HTMLAnchorElement>;
  type: 'button' | 'link';
  children: ReactNode;
  href?: string;
}
