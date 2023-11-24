import './JournalItem.css';

function JournalItem({ title, date, text }) {
  // console.log(date); // Wed Nov 08 2023 02:00:00 GMT+0200 (Eastern European Standard Time)  console.log(date); // Wed Nov 08 2023 02:00:00 GMT+0200 (Eastern European Standard Time)
  const formatedDate = new Intl.DateTimeFormat('uk-UA').format(date);

  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{text}</div>
      </div>
    </>
  );
}

export default JournalItem;
