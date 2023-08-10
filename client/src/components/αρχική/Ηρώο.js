import { useAppContext } from '../../context/appContext';
// import Λογότυπο from '../Λογότυπο';
import ΚινούμενηΕικόναΥποβάθρου from './ΚινούμενηΕικόναΥποβάθρου';
import styled from 'styled-components';
import { πληροφορίεςΤομέα } from '../../db/ΠληροφορίεςΤομέα';
import μετάφραση from '../../utils/μετάφραση.js';

const Ηρώο = () => {
  const { γλώσσα, τομέαςΑρχικής } = useAppContext();
  const ευρετήριοΌρου = πληροφορίεςΤομέα.τίτλος.findIndex(
    (ε) => ε === τομέαςΑρχικής
  );

  const κείμενοΤομέα = πληροφορίεςΤομέα.κείμενο[ευρετήριοΌρου];
  return (
    <Τομέας nopadding>
      <ΣτήλεςΤομέα row>
        <ΑριστερήΣτήλη>
          <ΤίτλοςΤομέα main>
            {τομέαςΑρχικής === 'ηρώο'
              ? μετάφραση('Καλώς ήλθες στον ιστότοπό μου.', γλώσσα)
              : μετάφραση(τομέαςΑρχικής, γλώσσα)}
          </ΤίτλοςΤομέα>
          <ΚείμενοΤομέα>{μετάφραση(κείμενοΤομέα, γλώσσα)}</ΚείμενοΤομέα>
        </ΑριστερήΣτήλη>
        <ΔεξιάΣτήλη>
          {/* <Λογότυπο /> */}
          {/* <SectionTitle main>
            Καλώς ήλθατε στον <br />
            προσωπικό μου ιστότοπο.
          </SectionTitle> */}
          <ΚινούμενηΕικόναΥποβάθρου />
        </ΔεξιάΣτήλη>
      </ΣτήλεςΤομέα>
    </Τομέας>
  );
};

const Τομέας = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  align-items: center;
  margin: 0 auto;
  width: 1500px;
  height: 500px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  z-index: 1000;
`;

const ΤίτλοςΤομέα = styled.h2`
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  padding: ${(props) => (props.main ? '58px 0 16px' : '0')};
  margin-bottom: 0.6rem;
  font-weight: 800;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ΣτήλεςΤομέα = styled.div`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  padding: ${(props) => (props.main ? '58px 0 16px' : '0')};
  margin-bottom: 0.6rem;
  font-weight: 800;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ΑριστερήΣτήλη = styled.div`
  width: max-content;
  max-width: 750px;
  height: 500px;
  margin-right: 25px;
`;

const ΔεξιάΣτήλη = styled.div`
  width: max-content;
  max-width: 750px;
  height: 450px;
  padding-top: 125px;
  margin-left: 25px;
`;

const ΚείμενοΤομέα = styled.p`
  width: max-content;
  max-width: 750px;
  height: 350px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
`;
export default Ηρώο;
