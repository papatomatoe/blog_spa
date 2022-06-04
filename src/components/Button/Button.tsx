import { FC } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import { ButtonProps } from './types';
const Button: FC<ButtonProps> = ({ className, buttonProps, linkProps, type, children, href }) => {
  const renderButton = () => {
    switch (type) {
      case 'button':
        return (
          <button {...buttonProps} className={cn(styles.button, className)}>
            {children}
          </button>
        );
      case 'link':
        return (
          <Link to={href || ''} {...linkProps} className={cn(styles.button, className)}>
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
