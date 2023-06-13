import translateText from "../utils/translateText";
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
  }}

  export default reducer