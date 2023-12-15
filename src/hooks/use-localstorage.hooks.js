import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));
    if (res) {
      setData(res);
    }
  }, []); // пустой массив - означает, что эта функция только один раз отработает

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
