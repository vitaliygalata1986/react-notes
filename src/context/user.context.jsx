import { createContext, useState } from 'react';

export const UserContext = createContext({
  userId: 10,
});

// UserContext содержит 2 react объекта: Provider,Consumer, в React 19-Provider не пишем
// Provider указывет на то, что этот контекст мы добавляем
// в определенный уровень нашего компонента
// Consumer - здесь мы можем получить наш контекст
// есть отдельный хук для получения контекста

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(1);
  return <UserContext value={{ userId, setUserId }}>{children}</UserContext>;
};
