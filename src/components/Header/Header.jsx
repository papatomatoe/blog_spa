import React, { useState } from "react";
import { useAppContext } from "../../context";
import cn from "classnames";
import MenuItem from "../MenuItem";

import styles from "./Header.module.css";

const MENU_LINKS = [
	{ id: "1", title: "about", link: "/about" },
	{ id: "2", title: "posts", link: "posts" },
	{ id: "3", title: "contacts", link: "contacts" },
];

const Header = (props) => {
	const [isActive, setIsActive] = useState(false);

	const { contextTitle } = useAppContext();

	return (
		<header className={styles.header}>
			<nav className={styles.header__nav}>
				<a className={styles.header__logo} href="#">
					Blog
				</a>
				<button
					className={cn(styles.header__button, {
						[styles.header__button__active]: isActive,
					})}
					aria-label="open menu"
					onClick={() => setIsActive((prev) => !prev)}
				/>
				<ul
					className={cn(styles.header__menu, {
						[styles.header__menu__active]: isActive,
					})}
				>
					{MENU_LINKS.map(({ id, link, title }) => (
						<MenuItem key={id} title={title} link={link} menuT={contextTitle} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
