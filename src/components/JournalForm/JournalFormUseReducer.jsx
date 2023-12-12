import { useEffect } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { useReducer } from 'react';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
  // dispatchForm - функция, которая вызывает нашу функцию обработчик
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  // деструктурируем наш стейт на мелкие элементы
  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.text || !isValid.date) {
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' }); // отправляем событие, что нам нужно выполнить action RESET_VALIDITY
      }, 2000);
    }
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values); // values - это объект с данными, которые мы отправляем {title: 'ewfw', date: '2023-12-23', tag: 'wefw', text: 'wef'}
    }
  }, [isFormReadyToSubmit]);

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData); // вытаскиваем значения
    dispatchForm({ type: 'SUBMIT', payload: formProps });
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(styles['input-title'], {
            [styles['invalid']]: !isValid.title,
          })}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-lable']}>
          <img src="/calendar.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cn(styles['input'], {
            [styles['invalid']]: !isValid.date,
          })}
        />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-lable']}>
          <img src="/folder.svg" alt="Иконка метки" />
          <span>Метки</span>
        </label>
        <input
          id="tag"
          className={`${styles['input']}`}
          type="text"
          name="tag"
        />
      </div>

      <textarea
        name="text"
        cols="30"
        rows="10"
        className={cn(styles['input'], {
          [styles['invalid']]: !isValid.text,
        })}
      ></textarea>
      <Button text="Сохранить"></Button>
    </form>
  );
}

export default JournalForm;
