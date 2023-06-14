import styled from 'styled-components';

import { useState } from 'react';
import { ΓραμμήΠλοήγησης, ΚοινήΔιάταξη } from '../components/αρχική';

const Αρχική = () => {
  const [activeSection, setActiveSection] = useState('ποιος-είμαι');

  return (
    <>
      <ΓραμμήΠλοήγησης className="πλοήγηση" />
      <Main>
        <ΚοινήΔιάταξη />
        {/* <section className="section sec1 ποιος-είμαι" id="ποιος-είμαι">
          Ποιος Είμαι
        </section>
        <section className="section sec2 τεχνολογίες" id="τεχνολογίες">
          Τεχνολογίες
        </section>
        <section className="section sec3 έργα" id="έργα">
          Έργα
        </section>
        <section className="section sec4 δεξιότητες" id="δεξιότητες">
          Δεξιότητες
        </section>
        <section className="section sec5 επικοινωνία" id="επικοινωνία">
          Επικοινωνία
        </section> */}
      </Main>
    </>
  );
};

const Main = styled.main`

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  sec1,
  sec2,
  sec3,
  sec4,
  sec5 {
    display: none;
    transform: translateY(0) scale(1);
  }
`;
export default Αρχική;
