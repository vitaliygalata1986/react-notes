import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

function Input(
  { className, isValid = false, appearence, ...props },
  ref
) {
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
};

export default Input;
