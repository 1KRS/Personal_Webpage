import ΚινούμενηΕικόναΥποβάθρου from '../components/αρχική/ΚινούμενηΕικόναΥποβάθρου';
import { ΓραμμήΠλοήγησης, Ηρώο, ΚοινήΔιάταξη } from '../components/αρχική';
// import Λογότυπο from '../Λογότυπο';
import styled from 'styled-components';

const Αρχική = () => {
  return (
    <>
      <ΓραμμήΠλοήγησης className="πλοήγηση" />
      <Main>
        <Τομέας grid>
          <Ηρώο />
          {/* <ΚινούμενηΕικόναΥποβάθρου /> */}
        </Τομέας>
        <ΚοινήΔιάταξη />
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

const Τομέας = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 0 0')};
  margin: 0 auto;
  max-width: 1500px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  z-index: 1000;
`;

export default Αρχική;
