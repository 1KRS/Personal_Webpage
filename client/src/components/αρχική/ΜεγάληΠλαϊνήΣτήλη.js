import { ΠλήκτραΕλέγχουΔεξιά } from '.';
import styled from 'styled-components';

const ΜεγάληΠλαϊνήΣτήλη = () => {
  return (
    <Περιέκτης>
      <ΠλήκτραΕλέγχουΔεξιά />
    </Περιέκτης>
  );
};

const Περιέκτης = styled.div`
display: none;
@media (min-width: 992px) {
  display: block;
}
`;

export default ΜεγάληΠλαϊνήΣτήλη;
