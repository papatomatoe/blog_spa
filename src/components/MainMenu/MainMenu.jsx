import React from "react";
import cn from "classnames";
import MenuItem from "../MenuItem";
import styles from "./MainMenu.module.css";
const MainMenu = ({ menuData, isActive }) => {
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
