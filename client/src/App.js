import 'normalize.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Αρχική, Εισαγωγική } from './pages';
import {
  Δεξιότητες,
  Επικοινωνία,
  Έργα,
  ΠοιοςΕίμαι,
  Τεχνολογίες,
} from './components';

function App() {
  return (
    <>
      <div className="κατασκευή">Υπό Κατασκευή!!</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Αρχική />}>
            <Route
              path={'ποιος-είμαι' || 'who-am-i' || 'färdigheter'}
              element={<ΠοιοςΕίμαι />}
            />
            <Route
              path={'δεξιότητες' || 'skills' || 'färdigheter'}
              element={<Δεξιότητες />}
            />
            <Route
              path={'επικοινωνία' || 'contact' || 'Kontakt'}
              element={<Επικοινωνία />}
            />
            <Route
              path={'έργα' || 'projects' || 'projekt'}
              element={<Έργα />}
            />
            <Route
              path={'τεχνολογίες' || 'technologies' || 'tekniker'}
              element={<Τεχνολογίες />}
            />
          </Route>
          <Route path="/landing" element={<Εισαγωγική />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
