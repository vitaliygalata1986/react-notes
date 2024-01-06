import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
// import styles from './Header.module.css';
// import { useState, useCallback } from 'react';
import { useState } from 'react';
const logos = ['/logo.svg', '/vite.svg'];
function Header() {
  const [logoIndex, setLogoIndex] = useState(0);
  //const [secondIndex, setSecondIndex] = useState(0);
  //console.log('Header');
  /*
  // вот эту функцию следует запомнить, если не появилось никаких параметров []
  const changeLogo = useCallback(() => {
    setLogoIndex((state) => Number(!state)); // state - предыдущее состояние
    console.log(logoIndex);
  }, [logoIndex]);
*/

  const changeLogo = () => {
    setLogoIndex((state) => Number(!state)); // state - предыдущее состояние
    //setSecondIndex((i) => i + 1);
  };
  return (
    <>
      <Logo image={logos[logoIndex]} />
      <SelectUser />
      <Button onClick={changeLogo}>Change Logo</Button>
    </>
  );
}

export default Header;
