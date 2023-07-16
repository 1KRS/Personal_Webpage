import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { ΔιαχωριστήςΤομέαΠάνω, ΔιαχωριστήςΤομέαΚάτω } from './αρχική';
import styled from 'styled-components';
import ΟλισθητήςΕικονιδίων from './ΟλισθητήςΕικονιδίων';
import τεχνολογίες from '../db/ΤεχνολογίεςDB';

const Technologies = () => {
  return (
    <>
      <Τομέας flex nopadding>
        <ΔιαχωριστήςΤομέαΠάνω />
        {/* <SectionTitle main>Τεχνολογίες</SectionTitle>
        <SectionText>
          Έχω εργαστεί με διάφορες τεχνολογίες επάνω σε διάφορα έργα και ιδέες.
        </SectionText> */}
      </Τομέας>
    
        <ΟλισθητήςΕικονιδίων db={τεχνολογίες} βάσηURL = '../../public/icons/'/>
        
      <Τομέας flex nopadding>
        <ΔιαχωριστήςΤομέαΚάτω />
      </Τομέας>
    </>
  );
};

const Τομέας = styled.section`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  padding: ${(props) => (props.nopadding ? '0' : '32px 48px 0')};
  margin: 0 auto 50px;
  max-width: 1500px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => (props.main ? '65px' : '56px')};
  line-height: ${(props) => (props.main ? '72px' : '56px')};
  /* padding: ${(props) => (props.main ? '16px 0' : '0')}; */
  margin: 0.6rem;
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
  max-width: 100%;
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  margin: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;

// const ImageContainer = styled.div`
//   text-align: center;
//   background-image: radial-gradient(
//     50% 50% at 50% 50%,
//     rgba(79, 108, 176, 0.25) 53.8%,
//     rgba(79, 108, 176, 0) 100%
//   );
//   width: 100%;
//   padding: 60px;
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const MainImage = styled.img`
//   width: 100%;
// `;

const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3.4rem 0 0;
`;

const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;
`;

const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
`;

// const ListIcon = styled.img`
//   display: block;
//   width: 48px;
//   height: 48px;
//   margin-bottom: 10px;
// `;

export default Technologies;
