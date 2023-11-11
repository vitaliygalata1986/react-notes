import './App.css';
import React from 'react';
import Button from './components/Button/Button';
import JournalItem from './components/Button/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';

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
      <CardButton>Новое воспоминание</CardButton>
      {data.map((item, index) => (
        <CardButton>
          <JournalItem key={index} {...item} />
        </CardButton>
      ))}
    </>
  );
}

export default App;
