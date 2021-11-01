import clsx from 'clsx';
import { ButtonProps } from './types';
import styles from './button.module.css';

export function Button({ children, id, type = 'button', className, size = 'standard', ...rest }: ButtonProps) {
  return (
    <button data-testid={id} className={clsx(styles.button, styles[size], className)} type={type} {...rest}>
      {children}
    </button>
  );
}

export default Button;
