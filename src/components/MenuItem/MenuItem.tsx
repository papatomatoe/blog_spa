import { FC } from 'react';
import cn from 'classnames';
import styles from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';
import { MenuItemProps } from './types';
const MenuItem: FC<MenuItemProps> = ({ link, title }) => {
  return (
    <li className={styles.header__item}>
      <NavLink
        className={({ isActive }) => {
          return cn(styles.header__link, {
            [styles.header__link__active]: isActive,
          });
        }}
        to={link}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default MenuItem;
