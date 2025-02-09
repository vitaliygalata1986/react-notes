import './App.css';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalFormUseReducer';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
//import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hooks';
//import { UserContext } from './context/user.context';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map((item) => ({
    ...item,
    date: new Date(item.date),
  }));
}

function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useLocalStorage('data');
  const [selectedItem, setSelectedItem] = useState({}); // выбранный item
  // const [userId, setUserId] = useState(1);
  // console.log('App');
  /*
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
  */

  /*
  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items));
    }
    //console.log(items);
  }, [items]); // каждый раз когда будет меняться items, мы в консоль будем выводить данные
  */

  /*
  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id:
          oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1, // находим самый большое значение id и добавляем к нему 1
        title: item.title,
        //  date: new Date('2023-11-16'), - в таком формате получаем из формы
        // тогда в итоге имеем Thu Nov 16 2023 02:00:00 GMT+0200 (Eastern European Standard Time)
        date: new Date(item.date),
        text: item.text,
      },
    ]);
  };
  */
  
  
  /*
  const items = [
	  { id: 1, name: "Item 1" },
	  { id: 3, name: "Item 2" },
	  { id: 2, name: "Item 3" }
	];

	const ids = items.map((i) => i.id); // [1, 3, 2]
	
	// Math.max(...[1, 3, 2]) дает 3.
	// 3 + 1 дает 4.
  */

  const addItem = (item) => {
    if (!item.id) {
      // если item не сушествует
      // console.log(item); // {title: 'asxasxas', text: 'asxasxasx', date: '2023-12-21', userId: 1, tag: 'asx'}
      setItems([
        //...mapItems(items), // получаем текущее состояние всех заметок
		items,
        { // добавляем новый item
          ...item, 
          // title: item.title,
          // text: item.text,
          // tag: item.tag,
          date: new Date(item.date),
          id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
        },
      ]);
    } else {
      // иначе обновим текущий item
      setItems([
        ...mapItems(items).map((i) => {
          if (i.id === item.id) {
            return {
              ...item,
            };
          }
          return i; // инача просто возвращаем i (другие item оставляем)
        }),
      ]);
    }
  };

  const deleteItem = (id) => {
    setItems([...items.filter((i) => i.id !== id)]);
    setSelectedItem({});
  };

  return (
    <>
      {/* <UserContext.Provider value={{ userId, setUserId }}> */}
      <UserContextProvider>
        <div className="app">
          <LeftPanel>
            <Header />
            <JournalAddButton clearForm={() => setSelectedItem(null)} />
            {/* <JournalList items={items} /> */}
            <JournalList setItem={setSelectedItem} items={mapItems(items)} />
          </LeftPanel>
          <Body>
            <JournalForm
              data={selectedItem}
              onDelete={deleteItem}
              onSubmit={addItem}
            />
          </Body>
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
