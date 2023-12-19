import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

import './JournalList.css';

function JournalList({ items }) {
  const { userId } = useContext(UserContext);
  if (items.length === 0) {
    return <p>Записей пока нет, добавьте первую</p>;
  }

  //const sortItems = (a, b) => b.date - a.date;
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="journal-list">
      {items
        .filter((item) => item.userId === userId)
        .sort(sortItems)
        .map((item) => (
          <CardButton key={item.id}>
            <JournalItem {...item} />
          </CardButton>
        ))}
    </div>
  );
}

export default JournalList;
