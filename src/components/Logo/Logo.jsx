//import { memo } from 'react';
import styles from './Logo.module.css';

function Logo({ image }) {
  return <img className={styles.logo} src={image} alt="Logo" />;
  // return <img className={styles.logo} src={'/logo.svg'} alt="Logo" />;
}

//export default memo(Logo);
export default Logo;
