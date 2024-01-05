import { memo } from 'react';
import './Button.css';
// import { useState } from 'react';

function Button({ children, onClick }) {
  console.log('Button');
  /*
  const [text, setText] = useState('Сохранить'); // возвращает кортеж - массив, состоящий из двух элементов
  // console.log('Рендер');
  const clicked = () => {
    /*
    setText('Закрыть');
    console.log(text); // остался старый текст 'Сохранить' - єто свзано с тем, что измение setText('Закрыть'); запланированно реакт в будующем
    // до того, как будет перерисован компонент, console.log(text) выведит нам старое значение
 
    setText((t) => t + '!'); // первое t - это предыдущее значение
  };
   */

  return (
    <button className="btn btn-blue" onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
