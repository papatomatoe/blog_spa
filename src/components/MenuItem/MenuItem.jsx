import React from "react";

const MenuItem = (props) => {
	return (
		<li className="header__item">
			<a className="header__link" href={props.link}>
				{props.title}
			</a>
		</li>
	);
};

export default MenuItem;
