import {
  ΔιαχωριστήςΣτοιχείωνΛίστας,
  ΔιαχωριστήςΤομέαΠάνω,
  ΔιαχωριστήςΤομέαΚάτω,
} from './αρχική';
import styled from 'styled-components';

const Δεξιότητες = () => {
  return (
    <Section flex nopadding id="δεξιότητες">
      <ΔιαχωριστήςΤομέαΠάνω />

      {/* <SectionTitle main>Δεξιότητες</SectionTitle> */}

      <ListUp>
        <ListItem>
          <ListTitle>Αισιοδοξία</ListTitle>
        </ListItem>
        <ΔιαχωριστήςΣτοιχείωνΛίστας χρώμα="κυανό" />
        <ListItem>
          <ListTitle>Ηγετικές Ικανότητες</ListTitle>
        </ListItem>
        <ΔιαχωριστήςΣτοιχείωνΛίστας χρώμα="πορτοκαλί"/>
        <ListItem>
          <ListTitle>Προσανατολισμός Στόχων</ListTitle>
        </ListItem>
        <ΔιαχωριστήςΣτοιχείωνΛίστας χρώμα="κυανό" />
        <ListItem>
          <ListTitle>Οργάνωση</ListTitle>
        </ListItem>
      </ListUp>

      <ListDown>
        <ListItem>
          <ListTitle>Κριτική Σκέψη</ListTitle>
        </ListItem>
        <ΔιαχωριστήςΣτοιχείωνΛίστας />
        <ListItem>
          <ListTitle>Επίλυση Προβλημάτων</ListTitle>
        </ListItem>
        <ΔιαχωριστήςΣτοιχείωνΛίστας χρώμα="κυανό" />
        <ListItem>
          <ListTitle>Πειθαρχία</ListTitle>
        </ListItem>
      </ListDown>

      <ΔιαχωριστήςΤομέαΚάτω />
    </Section>
  );
};

const Section = styled.section`
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

const ListUp = styled.ul`
  list-style-type: none;
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  /* gap: 40px; */
  /* margin: 1rem 0; */
`;
const ListDown = styled.ul`
  list-style-type: none;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  /* gap: 40px; */
  /* margin: 1rem 0; */
`;

const ListItem = styled.li`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid linear-gradient(0deg, #F46737 0%, #945DD6 50%, #945DD6 100%)'
`;

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 0;
`;

const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
`;

const ListIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default Δεξιότητες;
