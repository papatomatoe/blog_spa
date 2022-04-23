import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
const Button = ({ className, buttonProps, linkProps, type, children, to }) => {
	const renderButton = () => {
		switch (type) {
			case "button":
				return (
					<button {...buttonProps} className={cn(styles.button, className)}>
						{children}
					</button>
				);
			case "link":
				return (
					<Link to={to} {...linkProps} className={cn(styles.button, className)}>
						{children}
					</Link>
				);
			default:
				return null;
		}
	};
	return renderButton();
};

export default Button;
