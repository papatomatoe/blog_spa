import { FC, useState } from 'react';
import cn from 'classnames';

import styles from './Header.module.css';
import MainMenu from 'components/MainMenu';
import { MENU_LINKS } from './store';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link className={styles.header__logo} to="/">
          Blog
        </Link>
        <button
          className={cn(styles.header__button, {
            [styles.header__button__active]: isActive,
          })}
          aria-label="open menu"
          onClick={() => setIsActive((prev) => !prev)}
        />
        <MainMenu menuData={MENU_LINKS} isActive={isActive} />
      </nav>
    </header>
  );
};

export default Header;
