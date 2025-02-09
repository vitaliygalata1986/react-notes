import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

function Input({ className, ref, isValid = false, appearence, ...props }) {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(styles['input'], {
        [styles['invalid']]: isValid,
        [styles['input-title']]: appearence === 'title',
      })}
    />
  );
}

export default Input;
