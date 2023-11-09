import './App.css';
import React from 'react';
import Button from './components/Button/Button';
import JournalItem from './components/Button/JournalItem/JournalItem';

function App() {
  return (
    <>
      <Button />
      <JournalItem />
    </>
  );
  // return React.createElement('div', {}, 'Проект');
}

export default App;
