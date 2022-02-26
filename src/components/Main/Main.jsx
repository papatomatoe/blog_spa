import React from "react";

const Main = (props) => {
	return (
		<main className="content">
			<h1 className="visually-hidden">{props.title}</h1>
			{props.children}
		</main>
	);
};

export default Main;
