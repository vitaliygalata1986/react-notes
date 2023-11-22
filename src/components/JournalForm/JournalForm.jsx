import { useState } from 'react';
import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm() {
  const [inputData, setInputData] = useState('');
  const [state, setState] = useState({
    age: 31,
  });

  const [state2, setState2] = useState([1, 2, 3]);

  const inputChange = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    state.age = 40;
    //state2.push(4);
    setState({ ...state }); // применяем spread оператор, тем самы создавая новый объект
    //setState2([...state2]);
    // console.log(state.age);
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
      {state.age}
      <br />
      {/* {state2.length} */}
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="post"></textarea>
      <Button text="Сохранить" onClick={() => console.log('first')}></Button>
    </form>
  );
}

export default JournalForm;
