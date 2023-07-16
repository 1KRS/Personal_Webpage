import { useAppContext } from '../../context/appContext';
// import Λογότυπο from '../Λογότυπο';
import styled from 'styled-components';
import { πληροφορίεςΤομέα } from '../../db/ΠληροφορίεςΤομέα';
import μετάφρασηΚειμένου from '../../utils/μετάφρασηΚειμένου.js';

const Ηρώο = () => {
  const { γλώσσα, τομέαςΑρχικής } = useAppContext();
  const ευρετήριοΌρου = πληροφορίεςΤομέα.τίτλος.findIndex(
    (e) => e === τομέαςΑρχικής
  );

  const κείμενοΤομέα = πληροφορίεςΤομέα.κείμενο[ευρετήριοΌρου];
  return (
    <Τομέας row nopadding>
      <LeftSection>
        <SectionTitle main>
          {τομέαςΑρχικής === 'ηρώο'
            ? μετάφρασηΚειμένου(
                'Καλώς ήλθες στον ιστότοπό μου.',
                γλώσσα
              )
            : μετάφρασηΚειμένου(τομέαςΑρχικής, γλώσσα)}
        </SectionTitle>
        <SectionText>{μετάφρασηΚειμένου(κείμενοΤομέα, γλώσσα)}</SectionText>
      </LeftSection>
      {/* <RightSection>
        <Λογότυπο />
        <SectionTitle main>
            Καλώς ήλθατε στον <br />
            προσωπικό μου ιστότοπο.
          </SectionTitle>
      </RightSection> */}
    </Τομέας>
  );
};

const Τομέας = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  align-items: center;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  z-index: 1000;
`;

const LeftSection = styled.div`
  width: 100%;
`;
const RightSection = styled.div`
  width: 50%;
`;

const SectionTitle = styled.h2`
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

const SectionText = styled.p`
  /* max-width: 800px; */
  width: max-content;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: left;
`;
export default Ηρώο;
