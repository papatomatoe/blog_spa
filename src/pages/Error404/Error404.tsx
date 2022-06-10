import { FC } from 'react';
import styles from './Error404.module.css';
import { Link, useNavigate } from 'react-router-dom';
const Error404: FC = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Page not found...</h1>
      <div className={styles.buttons}>
        <Link className={styles.link} to="/">
          home
        </Link>
        <button className={styles.back} type="button" onClick={goBack}>
          back
        </button>
      </div>
    </div>
  );
};

export default Error404;
