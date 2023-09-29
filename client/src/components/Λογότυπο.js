import styled from 'styled-components';

const Λογότυπο = () => {
  return (
    <ΠεριέκτηςΕικόνας>
      {/* <MainImage
        src="../assets/images/Φτερά Ικάρου (Λευκά Χωρίς Υπόβαθρο).png"
        alt="Φτερά Ικάρου"
      /> */}
      
    </ΠεριέκτηςΕικόνας>
  );
};

const ΠεριέκτηςΕικόνας = styled.div`
  /* background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  ); */
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  /* background: #ffffff; */
  width: 100%;
  height: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

// const MainImage = styled.img`
//   width: 100%;
// `;

export default Λογότυπο;
