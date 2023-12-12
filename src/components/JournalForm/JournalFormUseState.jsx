import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';

const INITIAL_STATE = {
  title: true,
  text: true,
  date: true,
};

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState(INITIAL_STATE);

  useEffect(() => {
    let timerId;
    if (!formValidState.title || !formValidState.text || !formValidState.date) {
      timerId = setTimeout(() => {
        setFormValidState(INITIAL_STATE);
      }, 2000);
    }
    // очищаем наш єффект
    // возвращаем из нашего эффекта новую функцию
    // когда наш компонент исчезает из нашего рендера (мы перешлли на другую страницу)
    // или когда происходит снова использование этого эффекта с измененным состоянием
    // таким образом не будут єффекты накладываться друг на друга - не будет мерцания
    // новые интервалы накапливаются не будут
    // в основном нуно чистить эффект, когда работаем с таймерами
  }, [formValidState]);

  const addJournalItem = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData); // вытаскиваем значения
    let isFormValid = true; // изначально считаем, что форма валидна
    if (!formProps.title?.trim().length) {
      setFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.text?.trim().length) {
      setFormValidState((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, text: true }));
    }
    if (!formProps.date) {
      // date должны проверить на undefined
      setFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setFormValidState((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
      // если форма не валидна, то return
    }
    onSubmit(formProps);
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cn(styles['input-title'], {
            [styles['invalid']]: !formValidState.title,
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
            [styles['invalid']]: !formValidState.date,
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
          [styles['invalid']]: !formValidState.text,
        })}
      ></textarea>
      <Button text="Сохранить"></Button>
    </form>
  );
}

export default JournalForm;
