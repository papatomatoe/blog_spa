import React from "react";
import MenuItem from "../MenuItem";

const MENU_LINKS = [
	{ id: "1", title: "about", link: "/about" },
	{ id: "2", title: "posts", link: "posts" },
	{ id: "3", title: "contacts", link: "contacts" },
];

const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<a className="header__logo" href="#">
					Blog
				</a>
				<button className="header__button" aria-label="open menu" />
				<ul className="header__menu">
					{MENU_LINKS.map(({ id, link, title }) => (
						<MenuItem key={id} title={title} link={link} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
