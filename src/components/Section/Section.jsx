import React from "react";
import styles from "./Section.module.sass";
const Section = ({ className, title, children }) => {
	return (
		<section className={className}>
			<h2 className={styles.section__heading}>{title}</h2>
			{children}
		</section>
	);
};

export default Section;
