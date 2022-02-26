import React from "react";
import MenuItem from "../MenuItem";
const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<a className="header__logo" href="#">
					Blog
				</a>
				<button className="header__button" aria-label="open menu" />
				<ul className="header__menu">
					<MenuItem title="about" link="/about" />
					<MenuItem title="posts" link="/posts" />
					<MenuItem title="contacts" link="/contacts" />
				</ul>
			</nav>
		</header>
	);
};

export default Header;
