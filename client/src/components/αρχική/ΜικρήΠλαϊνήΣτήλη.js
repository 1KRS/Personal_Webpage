import { ΠλήκτραΕλέγχουΚάτω } from '.';
import styled from 'styled-components';

const ΜικρήΠλαϊνήΣτήλη = () => {
  return (
    <Περιέκτης>
      <ΠλήκτραΕλέγχουΚάτω />
    </Περιέκτης>
  );
};

const Περιέκτης = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;

export default ΜικρήΠλαϊνήΣτήλη;
