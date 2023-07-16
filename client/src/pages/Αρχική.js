import BackgroundAnimation from '../components/αρχική/BackgroundAnimation';
import styled from 'styled-components';

// import { useState } from 'react';
import { ΓραμμήΠλοήγησης, Ηρώο, ΚοινήΔιάταξη } from '../components/αρχική';

const Αρχική = () => {
  return (
    <>
      <ΓραμμήΠλοήγησης className="πλοήγηση" />
      <Main>
        <Section grid>
          <Ηρώο />
          <BackgroundAnimation />
        </Section>
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

const Section = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto;
  max-width: 1500px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  z-index: 1000;
`;


export default Αρχική;
