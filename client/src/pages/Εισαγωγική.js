import styled from 'styled-components';
import logo from '../assets/images/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png';
// import { Link, Navigate } from 'react-router-dom';
// import { useAppContext } from '../context/appContext';
// import { translateText } from '../utils/translateText';
// import { LanguagesContainer } from '../components';

const Εισαγωγική = () => {
  // const { language, isLoading } = useAppContext();
  return (
    <Wrapper className="App">
      <div className="container page  ">
        <div className="info">
          <h1>Καλώς ήλθατε στην σελίδα μου</h1>
          <p>
            Ονομάζομαι Δημήτρης αλλά αυτοί που με ξέρουν με φωνάζουν Ίκαρο.
            Είμαι ένας Νέος Προγραμματιστής Πλήρους Στοίβας από την Ελλάδα με
            βάση την Σουηδία.
          </p>
        </div>
      </div>
      <img src={logo} alt="Λογότυπο" className="img main-img" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */

  p {
    text-align: justify;
  }
`;

export default Εισαγωγική;
