import styled from 'styled-components';

const ΔιαχωριστήςΣτοιχείωνΛίστας = ({χρώμα}) => {
  return (
    <ΠεριέκτηςΔιαχωριστή>
      <ΔιαχωριστήςΣτοιχείων χρώμα={χρώμα}/>
    </ΠεριέκτηςΔιαχωριστή>
  );
};

const ΠεριέκτηςΔιαχωριστή = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ΔιαχωριστήςΣτοιχείων = styled.div`
  width: 6px;
  height: 26px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.χρώμα === 'κυανό' ? '#13ADC7 ': 
      props.χρώμα ==='πορτοκαλί'
      ? '#F46737'
      : '#945DD6'};
  margin: 0, 18px;
`;

export default ΔιαχωριστήςΣτοιχείωνΛίστας;
