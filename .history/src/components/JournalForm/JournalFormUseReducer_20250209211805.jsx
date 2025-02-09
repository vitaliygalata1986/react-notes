import { useEffect } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { useReducer, useRef } from 'react';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

function JournalForm({ onSubmit, data, onDelete }) {
  const { userId } = useContext(UserContext);
  // dispatchForm - функция, которая вызывает нашу функцию обработчик
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  // деструктурируем наш стейт на мелкие элементы
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef(); // создали референс элемент с которым будем взаимод.
  const dateRef = useRef(); // создали референс элемент с которым будем взаимод.
  const textRef = useRef(); // создали референс элемент с которым будем взаимод.
  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.text || !isValid.date) {
      focusError(isValid); // передаем изначальное состояние валидности
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY' }); // отправляем событие, что нам нужно выполнить action RESET_VALIDITY
      }, 2000);
    }
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values); // values - это объект с данными, которые мы отправляем {title: 'ewfw', date: '2023-12-23', tag: 'wefw', text: 'wef'}
      dispatchForm({ type: 'CLEAR_FORM' });
      dispatchForm({
        type: 'SET_VALUE',
        payload: { userId },
      });
    }
  }, [isFormReadyToSubmit, onSubmit, values, userId]);

  useEffect(() => {
    // будет срабатывать, когда выберим item
    if (!data) {
      // изначально data - null
      // !null - true
      dispatchForm({ type: 'CLEAR_FORM' });
      dispatchForm({
        type: 'SET_VALUE',
        payload: { userId },
      });
    }
    dispatchForm({
      type: 'SET_VALUE',
      payload: {
        ...data,
      },
    });
  }, [data]);

  useEffect(() => {
    // при изменении userId мы дополним нашу форму
    dispatchForm({
      type: 'SET_VALUE',
      payload: {
        userId,
      },
    });
  }, [userId]);

  const onChange = (e) => {
    dispatchForm({
      type: 'SET_VALUE',
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };

  const addJournalItem = (event) => {
    dispatchForm({ type: 'SUBMIT' });
  };

  const deleteJournalItem = () => {
    onDelete(data.id);
    dispatchForm({ type: 'CLEAR_FORM' });
    // после очистки формы мы должны сразу прочитать select
    // выбранного пользователя
    dispatchForm({
      type: 'SET_VALUE',
      payload: { userId },
    });
  };

  return (
    /*
      <UserContext.Consumer>
        {(context) => (
    */
    <form className={styles['journal-form']} action={addJournalItem}>
      <div className={styles['form-row']}>
        <Input
          name='title'
          type='text'
          ref={titleRef}
          value={values.title}
          isValid={!isValid.title}
          onChange={onChange}
          appearence='title'
          className={styles['input']}
          placeholder='Введите название заметки'
        />
        {data?.id && (
          <button className={styles.delete} type='button'>
            <img
              onClick={deleteJournalItem}
              src='delete.svg'
              alt='Удалить запись'
            />
          </button>
        )}
      </div>
      <div className={styles['form-row']}>
        <label htmlFor='date' className={styles['form-lable']}>
          <img src='calendar.svg' alt='Иконка календаря' />
          <span>Дата</span>
        </label>
        <Input
          type='date'
          name='date'
          ref={dateRef}
          value={
            values.date ? new Date(values.date).toISOString().slice(0, 10) : ''
          }
          isValid={!isValid.date}
          onChange={onChange}
          id='date'
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor='tag' className={styles['form-lable']}>
          <img src='folder.svg' alt='Иконка метки' />
          <span>Метки</span>
        </label>
        <Input
          type='text'
          onChange={onChange}
          id='tag'
          name='tag'
          value={values.tag}
        />
      </div>
      <textarea
        name='text'
        value={values.text}
        onChange={onChange}
        cols='30'
        rows='10'
        ref={textRef}
        placeholder='Введите текст заметки'
        className={cn(styles['input'], {
          [styles['invalid']]: !isValid.text,
        })}
      ></textarea>
      <Button>Сохранить</Button>
    </form>
  );
}
/*
  </UserContext.Consumer>
  );
}
*/

export default JournalForm;
