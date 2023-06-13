const initialState = {
  user: null,
  language: localStorage.getItem('language') || 'ελληνικά',
  userLocation: '',
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
};

export default initialState