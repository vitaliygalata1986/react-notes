import './App.css';
import React from 'react';
import Button from './components/Button/Button';
import JournalItem from './components/Button/JournalItem/JournalItem';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
    },
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
    },
    {
      title: 'Подготовка к обновлению курсов',
      date: new Date(),
      text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
    },
  ];

  return (
    <>
      <Button />
      {data.map((item, index) => (
        <JournalItem key={index} {...item} />
      ))}
    </>
  );
  // return React.createElement('div', {}, 'Проект');
}

export default App;
