import { FC } from 'react';
import { ContactProps } from './types';
import styles from './Contact.module.css';

const Contact: FC<ContactProps> = ({ label, link, children, type }) => {
  const getHref = (type: 'tel' | 'email', link: string) => {
    switch (type) {
      case 'tel':
        return `tel:${link}`;
      case 'email':
        return `mailto:${link}`;
      default:
        return link;
    }
  };
  return (
    <>
      <span className={styles.label}>{label}: </span>
      <a className={styles.value} href={getHref(type, link)}>
        {children}
      </a>
    </>
  );
};

export default Contact;
