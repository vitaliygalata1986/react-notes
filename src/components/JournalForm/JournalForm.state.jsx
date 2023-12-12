export const INITIAL_STATE = {
  isValid: {
    // валидна ли форма, изначально форма валидна, так как ничего не введено
    title: true,
    text: true,
    date: true,
  },
  values: {
    // тоесть если значения не заданы - форма валидна
    title: undefined,
    text: undefined,
    date: undefined,
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
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid };
    case 'SUBMIT': {
      const titleValidity = action.payload.title?.trim().length;
      const textValidity = action.payload.text?.trim().length;
      const dateValidity = action.payload.date?.trim().length;
      return {
        values: action.payload,
        isValid: {
          title: titleValidity,
          text: textValidity,
          date: dateValidity,
        },
        isFormReadyToSubmit: titleValidity && textValidity && dateValidity,
      };
    }
  }
}
