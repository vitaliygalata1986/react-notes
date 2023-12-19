import './JournalItem.css';

function JournalItem({ title, date, text, tag }) {
  // console.log(date); // Wed Nov 08 2023 02:00:00 GMT+0200 (Eastern European Standard Time)  console.log(date); // Wed Nov 08 2023 02:00:00 GMT+0200 (Eastern European Standard Time)
  const formatedDate = new Intl.DateTimeFormat('uk-UA').format(date);

  return (
    <>
      <h2 className="journal-item__header">Title: {title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">Data: {formatedDate}</div>
        <div className="journal-item__text">Text: {text}</div>
        <div className="journal-item__tag">Tags: {tag}</div>
      </div>
    </>
  );
}

export default JournalItem;
