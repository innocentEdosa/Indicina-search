import { HTMLAttributes } from 'react';
import styles from './errormessage.module.css';

export default function ErrorMessage(props: HTMLAttributes<HTMLParagraphElement> & { children: string }) {
  return <p {...props} role="alert" className={styles.msg} />;
}
