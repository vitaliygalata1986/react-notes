import Button from '../Button/Button';
import './JournalForm.css';

function JournalForm({ onSubmit }) {
  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData); // вытаскиваем значения
    onSubmit(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title" />
      <input type="date" name="date" />
      <input type="text" name="tag" />
      <textarea name="text"></textarea>
      <Button text="Сохранить"></Button>
    </form>
  );
}

export default JournalForm;
