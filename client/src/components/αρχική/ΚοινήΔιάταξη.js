import { Outlet } from 'react-router-dom';
import { ΜεγάληΠλαϊνήΣτήλη, ΜικρήΠλαϊνήΣτήλη } from '.';
import styled from 'styled-components';
// import { useState } from 'react';

const ΚοινήΔιάταξη = () => {
  // const [activeSection, setActiveSection] = useState('ποιος-είμαι');
  return (
    <Περιέκτης>
      <ΜεγάληΠλαϊνήΣτήλη />
      <ΜικρήΠλαϊνήΣτήλη />
      <Outlet />
    </Περιέκτης>
  );
};
const Περιέκτης = styled.div``;

export default ΚοινήΔιάταξη;
