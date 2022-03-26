import React from "react";
import styles from "./MenuItem.module.css";
const MenuItem = (props) => {
	return (
		<li className={styles.header__item}>
			<a className={styles.header__link} href={props.link}>
				{props.title}
			</a>
		</li>
	);
};

export default MenuItem;
