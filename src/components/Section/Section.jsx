import React from "react";
import styles from "./Section.module.sass";
const Section = (props) => {
	return (
		<section className={props.className}>
			<h2 className={styles.section__heading}>{props.title}</h2>
			{props.children}
		</section>
	);
};

export default Section;
