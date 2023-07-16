import translateText from '../utils/μετάφρασηΚειμένου';
// import initialState from './initialState';

const reducer = (state, action) => {
  if (action.type === 'DISPLAY_ALERT') {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: translateText(
        'Συμπλήρωσε όλα τα πεδία!',
        `${action.payload.language}`
      ),
    };
  }

  if (action.type === 'CLEAR_ALERT') {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === 'CHANGE_LANGUAGE') {
    return {
      ...state,
      γλώσσα: action.payload.νέαΓλώσσα,
    };
  }
  if (action.type === 'TOGGLE_SECTION') {
    return {
      ...state,
      τομέαςΑρχικής: action.payload.newSection,
    };
  }
};

export default reducer;
