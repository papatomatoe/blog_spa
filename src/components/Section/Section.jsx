import React from "react";

const Section = (props) => {
	return (
		<section className={props.className}>
			<h2 className="section__heading">{props.title}</h2>
			{props.children}
		</section>
	);
};

export default Section;
