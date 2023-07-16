import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { IoIosApps } from 'react-icons/io';
import { TiTick, TiMessages } from 'react-icons/ti';
import styled from 'styled-components';

const ΠλήκτραΕλέγχουΚάτω = () => {
  return (
    <Περιέκτης>
      <Link to="/ποιος-είμαι" className=" ctrl-link1">
        <button className="btn  active-btn">
          <BsFillPersonFill size={35} />
        </button>
      </Link>
      <Link to="τεχνολογίες" className=" ctrl-link2">
        <button className="btn" disable3>
          <FaLaptopCode size={35} />
        </button>
      </Link>
      <Link to="έργα" className=" ctrl-link3">
        <button className="btn" disable3>
          <IoIosApps size={35} />
        </button>
      </Link>
      <Link to="δεξιότητες" className=" ctrl-link4">
        <button className="btn" disable3>
          <TiTick size={39} />
        </button>
      </Link>
      <Link to="επικοινωνία" className=" ctrl-link5">
        <button className="btn" disable3>
          <TiMessages size={35} />
        </button>
      </Link>
    </Περιέκτης>
  );
};

const Περιέκτης = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: translateX(-50%);
  position: fixed;
  bottom: 3%;
  left: 50%;
  z-index: 10;

  button {
    padding: 9px 11px;
    /* border-radius: 50px; */
    path {
      color: white;
    }
  }
  .active-btn {
    border: 4px solid var(--primary-700) !important;
    button {
    }
  }
  .ctrl-link1 {
    margin: 11px 2px 9px;
  }
  .ctrl-link2,
  .ctrl-link3 {
    margin: 11px 2px 7px;
  }
  .ctrl-link4 {
    padding: 7px 0px;
  }
  .ctrl-link5 {
    padding: 9px 2px;
  }
`;

export default ΠλήκτραΕλέγχουΚάτω;
