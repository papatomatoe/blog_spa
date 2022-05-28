import { FC, ReactNode } from 'react';

import styles from './Main.module.css';

const Main: FC<{ title?: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <main className={styles.content}>
      {title && <h1 className="visually-hidden">{title}</h1>}
      {children}
    </main>
  );
};

export default Main;
