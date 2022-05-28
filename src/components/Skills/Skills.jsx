import React from "react";
import cn from "classnames";
import styles from "./Skills.module.css";

const Skills = ({ skills }) => {
	return (
		<ul className={styles.skills}>
			{skills.map((skill) => (
				<li
					key={skill}
					className={cn(styles.default, styles[skill.toLowerCase()])}
				>
					{skill}
				</li>
			))}
		</ul>
	);
};

export default Skills;
