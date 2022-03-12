import React, { useState } from "react";
import cn from "classnames";
import MenuItem from "../MenuItem";

const MENU_LINKS = [
	{ id: "1", title: "about", link: "/about" },
	{ id: "2", title: "posts", link: "posts" },
	{ id: "3", title: "contacts", link: "contacts" },
];

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className="header">
			<nav className="header__nav">
				<a className="header__logo" href="#">
					Blog
				</a>
				<button
					className={cn("header__button", { "header__menu--active": isActive })}
					aria-label="open menu"
					onClick={() => setIsActive((prev) => !prev)}
				/>
				<ul
					className={cn("header__menu", { "header__menu--active": isActive })}
				>
					{MENU_LINKS.map(({ id, link, title }) => (
						<MenuItem key={id} title={title} link={link} />
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
