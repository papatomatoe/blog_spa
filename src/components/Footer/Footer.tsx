import { FC } from 'react';

import styles from './Footer.module.css';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.footer__copy}>&copy; Blog {currentYear}</p>
    </footer>
  );
};

export default Footer;
