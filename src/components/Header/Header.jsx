import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// import styles from './Header.module.css';
import { useState, useCallback } from 'react';
const logos = ['/logo.svg', '/vite.svg'];
function Header() {
  const [logoIndex, setLogoIndex] = useState(0);
  console.log('Header');
  // вот эту функцию следует запомнить, если не появилось никаких параметров []
  const changeLogo = useCallback(() => {
    setLogoIndex((state) => Number(!state)); // state - предыдущее состояние
  }, []);
  return (
    <>
      <Logo image={logos[0]} />
      <SelectUser />
      <Button onClick={changeLogo}>Change Logo</Button>
    </>
  );
}

export default Header;
