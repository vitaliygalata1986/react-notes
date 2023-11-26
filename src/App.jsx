import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import { useState } from 'react';

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    date: new Date(),
    text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
  },
  {
    id: 2,
    title: 'Подготовка к обновлению курсов',
    date: new Date(),
    text: 'Горные походы открывают удивительные природные ландшафты, испытывают туристов физически и морально, дают возможность почувствовать себя первопроходцем',
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        title: item.title,
        text: item.text,
        //  date: new Date('2023-11-16'), - в таком формате получаем из формы
        // тогда в итоге имеем Thu Nov 16 2023 02:00:00 GMT+0200 (Eastern European Standard Time)
        date: new Date(item.date),
        id: Math.max(...oldItems.map((i) => i.id)) + 1, // находим самый большое значение id и добавляем к нему 1
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
