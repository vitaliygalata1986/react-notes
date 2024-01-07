export const INITIAL_STATE = {
  isValid: {
    // валидна ли форма, изначально форма валидна, так как ничего не введено
    title: true,
    text: true,
    date: true,
  },
  values: {
    // тоесть если значения не заданы - форма валидна
    title: '',
    text: '',
    date: '',
    tag: '',
  },
  // готова ли форма к сабмиту
  isFormReadyToSubmit: false,
};
// action - { type: 'RESET_VALIDITY' }
// export function formReducer(state, action) {
export function formReducer(state, action) {
  // reducer сперва принимает предыд. состояние
  // action - то, что нам нужно сделать
  switch (
    action.type // будем проверять тип
  ) {
    case 'CLEAR_FORM':
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: false,
      };
    case 'RESET_VALIDITY':
      return {
        ...state,
        isValid: INITIAL_STATE.isValid,
      };
    case 'SUBMIT': {
      const titleValidity = state.values.title?.trim().length;
      const textValidity = state.values.text?.trim().length;
      const dateValidity = state.values.date;
      return {
        ...state,
        isValid: {
          title: titleValidity,
          text: textValidity,
          date: dateValidity,
        },
        isFormReadyToSubmit: titleValidity && textValidity && dateValidity,
      };
    }
    case 'SET_VALUE': {
      return {
        ...state,
        values: {
          ...state.values, // мы ведь не можем все сразу инпуты обработать, поэтому возвращаем предыдущий стейт
          ...action.payload, // дополним одним инпутом, который нам пришел
        },
      };
    }
    case 'SET_FORM': {
      return {
        ...state,
      };
    }
  }
}
