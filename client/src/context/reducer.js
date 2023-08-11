import translateText from '../utils/μετάφραση';
// import initialState from './initialState';

const reducer = (state, action) => {
  if (action.type === 'DISPLAY_ALERT') {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: translateText(
        'Συμπλήρωσε όλα τα πεδία!',
        `${action.payload.γλώσσα}`
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

  if (action.type === 'ΑΛΛΑΓΗ_ΓΛΩΣΣΑΣ') {
    return {
      ...state,
      γλώσσα: action.payload.νέαΓλώσσα,
    };
  }
  if (action.type === 'TOGGLE_SECTION') {
    return {
      ...state,
      τομέαςΑρχικής: action.payload.νέοςΤομέας,
    };
  }
};

export default reducer;
