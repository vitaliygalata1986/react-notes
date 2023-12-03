import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      const dataNew = data.map((item) => ({
        ...item,
        date: new Date(item.date), // нам нужно преобразовать в такой вид: Fri Mar 03 2023 00:00:00 GMT+0200 (Eastern European Standard Time)
      }));
      setItems(dataNew);
    }
  }, []); // пустой массив - означает, что эта функция только один раз отработает

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        title: item.title,
        text: item.text,
        //  date: new Date('2023-11-16'), - в таком формате получаем из формы
        // тогда в итоге имеем Thu Nov 16 2023 02:00:00 GMT+0200 (Eastern European Standard Time)
        date: new Date(item.date),
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1, // находим самый большое значение id и добавляем к нему 1
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
