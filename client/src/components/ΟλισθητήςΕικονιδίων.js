import styled from 'styled-components';
import { register } from 'swiper/element/bundle';

register();

const ΟλισθητήςΕικονιδίων = ({ db, βάσηURL }) => {
  return (
    <Περιέκτης>
      {/* <swiper-container slides-per-view="4" centeredSlides="true">
        {db.map((s, i) => {
          console.log('S', s)
          const πλήρεςURL = `${βάσηURL}${s.εικόνα}`
          return (
            <swiper-slide key={i}>
              <ListItem>
                <img
                  src={require(s.εικόνα)}
                  title="JS"
                  alt="JS"
                  width="80"
                  height="80"
                />
                <ListTitle>{s.τίτλος}</ListTitle>
              </ListItem>
            </swiper-slide>
          );
        })}
      </swiper-container> */}

      <swiper-container
        slides-per-view="10"
        height="500"
        width="1500"
        centeredSlides="true"
      >
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Javascript.png')}
              title="JS"
              alt="JS"
              width="80"
              height="80"
            />
            <ListTitle>JS</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Html5.png')}
              title="HTML5"
              alt="HTML5"
              width="80"
              height="80"
            />
            <ListTitle>HTML5</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Css3.png')}
              title="CSS3"
              alt="CSS3"
              width="80"
              height="80"
            />
            <ListTitle>CSS3</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Express.png')}
              title="Express"
              alt="Express"
              width="80"
              height="80"
            />
            <ListTitle>Express</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Mongodb.png')}
              title="MongoDB"
              alt="MongoDB"
              width="80"
              height="80"
            />
            <ListTitle>MongoDB</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Git.png')}
              title="GIT"
              alt="GIT"
              width="80"
              height="80"
            />
            <ListTitle>GIT</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Nodejs.png')}
              title="NodeJS"
              alt="NodeJS"
              width="80"
              height="80"
            />
            <ListTitle>NodeJS</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/React.png')}
              title="React"
              alt="React"
              width="80"
              height="80"
            />
            <ListTitle>React</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/React Native.png')}
              title="React Native"
              alt="React Native"
              width="80"
              height="80"
            />
            <ListTitle>React Native</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Npm.png')}
              title="NPM"
              alt="NPM"
              width="80"
              height="80"
            />
            <ListTitle>NPM</ListTitle>
          </ListItem>
        </swiper-slide>
      </swiper-container>
      <Κενό />
      <swiper-container slides-per-view="9" width="1500" centeredSlides="true">
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Firebase.png')}
              title="Firebase"
              alt="Firebase"
              width="60"
              height="80"
            />
            <ListTitle>Firebase</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Github.png')}
              title="Github"
              alt="Github"
              width="80"
              height="80"
            />
            <ListTitle>Github</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/VSCode.png')}
              title="VSCode"
              alt="VSCode"
              width="80"
              height="80"
            />
            <ListTitle>VSCode</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Yarn.png')}
              title="Yarn"
              alt="Yarn"
              width="80"
              height="80"
            />
            <ListTitle>Yarn</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Redux.png')}
              title="Redux"
              alt="Redux"
              width="80"
              height="80"
            />
            <ListTitle>Redux</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Mysql.png')}
              title="JS"
              alt="JS"
              width="80"
              height="80"
            />
            <ListTitle>JS</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Swift.png')}
              title="Swift"
              alt="Swift"
              width="80"
              height="80"
            />
            <ListTitle>Swift</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Bootstrap.png')}
              title="Bootstrap"
              alt="Bootstrap"
              width="80"
              height="80"
            />
            <ListTitle>Bootstrap</ListTitle>
          </ListItem>
        </swiper-slide>
        <swiper-slide>
          <ListItem>
            <img
              src={require('../assets/icons/Webpack.png')}
              title="Webpack"
              alt="Webpack"
              width="80"
              height="80"
            />
            <ListTitle>Webpack</ListTitle>
          </ListItem>
        </swiper-slide>
      </swiper-container>
    </Περιέκτης>
  );
};

const Περιέκτης = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Κενό = styled.div`
  /* display: none; */
  /* @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */
  height: 20px;
`;

const ListItem = styled.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-top: 10px;
`;
export default ΟλισθητήςΕικονιδίων;
