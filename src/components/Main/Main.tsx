import { FC } from 'react';
import { MainProps } from './types';
import styles from './Main.module.css';

const Main: FC<MainProps> = ({ title, children }) => {
  return (
    <main className={styles.content}>
      {title && <h1 className="visually-hidden">{title}</h1>}
      {children}
    </main>
  );
};

export default Main;
