import 'normalize.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Αρχική, Εισαγωγική } from './pages';
import { Έργα } from './components';

function App() {
  return (
    <>
      <div className='κατασκευή'>Υπό Κατασκευή!!</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Αρχική />}>
            <Route
              path={'τεχνολογίες' || 'technologies' || 'tekniker'}
              element={<Έργα />}
            />
            <Route
              path={'έργα' || 'projects' || 'projekt'}
              element={<Έργα />}
            />
          </Route>
          <Route path="/landing" element={<Εισαγωγική />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
