import { createContext } from 'react';

export const UserContext = createContext({
  userId: 1,
});

// UserContext содержит 2 react объекта: Provider,Consumer
// Provider указывет на то, что этот контекст мы добавляем
// в определенный уровень нашего компонента
// Consumer - здесь мы можем получить наш контекст
// есть отдельный хук для получения контекста
