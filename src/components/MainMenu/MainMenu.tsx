import { FC } from 'react';
import cn from 'classnames';
import MenuItem from 'components/MenuItem';
import styles from './MainMenu.module.css';
import { MainMenuProps } from './types';
const MainMenu: FC<MainMenuProps> = ({ menuData, isActive }) => {
  return (
    <ul
      className={cn(styles.list, {
        [styles.active]: isActive,
      })}
    >
      {menuData.map(({ id, link, title }) => (
        <MenuItem key={id} title={title} link={link} />
      ))}
    </ul>
  );
};

export default MainMenu;
