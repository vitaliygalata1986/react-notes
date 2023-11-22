import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
  const [inputData, setInputData] = useState('');

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // console.log(...formData);
    // for (let [name, value] of formData) {
    //   console.log('name', name);
    //   console.log('value', value);
    // }
    // const formProps = Object.fromEntries(formData); // вытаскиваем значения
    //console.log(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="post"></textarea>
      <Button text="Сохранить" onClick={() => console.log('first')}></Button>
    </form>
  );
}

export default JournalForm;
