const initialState = {
  γλώσσα: localStorage.getItem('γλώσσα') || 'ελληνικά',
  userLocation: '',
  userLoading: true,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  τομέαςΑρχικής: 'ηρώο',

};

export default initialState