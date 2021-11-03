import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';
import { ButtonProps } from 'components/Button/types';
import styles from './buttonLink.module.css';

type ButtonLinkProps = ButtonProps & HTMLAttributes<HTMLAnchorElement | HTMLDivElement> & { href: string; as?: 'a' | 'router' };

export default function ButtonLink({ children, className, as, href, ...rest }: ButtonLinkProps) {
  const defaultProps = {
    className: clsx(styles.buttonLink, className),
  };

  switch (as) {
    case 'router':
      return (
        <Link to={href}>
          <div {...defaultProps} {...rest}>
            {children}
          </div>
        </Link>
      );

    default:
      return (
        <a {...defaultProps} href={href} {...rest}>
          {children}
        </a>
      );
  }
}
