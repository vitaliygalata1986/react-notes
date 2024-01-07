import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';
import { UserContext } from '../../context/user.context';
import './JournalList.css';
import { useContext, useMemo } from 'react';

function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext);

  //const sortItems = (a, b) => b.date - a.date;
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  // каждый раз, когда будет меняться либо items либо userId
  // filterItems должен пересчитаться
  // если items либо userId остались тоже, то filterItems запомнили
  // это даст то преимущество, что если функция JournalList получит
  // другие пропсы, то фильтрация заново не будет отрабатывать
  const filterItems = useMemo(
    () => items.filter((item) => item.userId === userId).sort(sortItems),
    [items, userId]
  );

  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  return (
    <div className="journal-list">
      {filterItems.map((item) => (
        <CardButton key={item.id} onClick={() => setItem(item)}>
          <JournalItem {...item} />
        </CardButton>
      ))}
    </div>
  );
}

export default JournalList;
