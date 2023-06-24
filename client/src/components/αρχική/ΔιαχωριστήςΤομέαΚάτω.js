import styled from 'styled-components';

const ΔιαχωριστήςΤομέαΚάτω = () => {
  return (
    <ΠεριέκτηςΔιαχωριστών>
      <ΔιαχωριστήςΤομέα διαχωριστής αριστερά />
      <ΔιαχωριστήςΤομέα διαχωριστής κέντρο />
      <ΔιαχωριστήςΤομέα διαχωριστής δεξιά />
    </ΠεριέκτηςΔιαχωριστών>
  );
};

const ΠεριέκτηςΔιαχωριστών = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

const ΔιαχωριστήςΤομέα = styled.div`
  width: ${(props) => (props.κέντρο ? '250px' : '150px')};
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.αριστερά
      ? 'linear-gradient(90deg, #F46737 0%, #945DD6 50%, #945DD6 100%)'
      : (props) =>
          props.κέντρο
            ? 'linear-gradient(90deg, #945DD6 0%, #F46737 45%, #F46737 55%, #945DD6 100%)'
            : (props) =>
                props.δεξιά
                  ? 'linear-gradient(90deg, #945DD6 0%, #945DD6 50%, #F46737 100%)'
                  : 'linear-gradient(90deg, #945DD6 0%, #F46737 50%, #945DD6 100%)'};
  margin: ${(props) => (props.διαχωριστής ? '4rem 0 3rem' : '3rem 0 4rem')};
`;

export default ΔιαχωριστήςΤομέαΚάτω;
