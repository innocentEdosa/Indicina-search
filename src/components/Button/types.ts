import { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: string | string[] | React.ReactElement;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  size?: 'standard' | 'small';
};
