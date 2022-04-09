import React from "react";
import styles from "./MenuItem.module.css";
import { Link } from "react-router-dom";
const MenuItem = ({ link, title }) => {
	return (
		<li className={styles.header__item}>
			<Link className={styles.header__link} to={link}>
				{title}
			</Link>
		</li>
	);
};

export default MenuItem;
