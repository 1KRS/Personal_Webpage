import { Link } from 'react-router-dom';

import { BsFillPersonFill } from 'react-icons/bs';
import { FaLaptopCode, FaStar, FaCheck } from 'react-icons/fa';
import { IoIosApps } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import { GiAngelWings } from 'react-icons/gi';
import { SiPlatformdotsh } from 'react-icons/si';
import styled from 'styled-components';
import { useAppContext } from '../../context/appContext';

const ΠλήκτραΕλέγχουΔεξιά = () => {
  const { toggleSection, τομέαςΑρχικής } = useAppContext();
  return (
    <Περιέκτης>
      <Link
        to="/"
        className=" ctrl-link0"
        onClick={() => {
          toggleSection('ηρώο');
        }}
      >
        <button className={τομέαςΑρχικής === 'ηρώο' ? 'btn  active-btn' : 'btn'}>
          <GiAngelWings size={35} />
        </button>
      </Link>
      <Link
        to="ποιος-είμαι"
        className=" ctrl-link1"
        onClick={() => {
          toggleSection('ποιος είμαι');
        }}
      >
        <button
          className={τομέαςΑρχικής === 'ποιος είμαι' ? 'btn  active-btn' : 'btn'}
        >
          <BsFillPersonFill size={35} />
        </button>
      </Link>
      <Link
        to="τεχνολογίες"
        className=" ctrl-link2"
        onClick={() => {
          toggleSection('τεχνολογίες');
        }}
      >
        <button
          className={τομέαςΑρχικής === 'τεχνολογίες' ? 'btn  active-btn' : 'btn'}
        >
          <FaLaptopCode size={35} />
        </button>
      </Link>
      <Link
        to="έργα"
        className=" ctrl-link3"
        onClick={() => {
          toggleSection('έργα');
        }}
      >
        <button className={τομέαςΑρχικής === 'έργα' ? 'btn  active-btn' : 'btn'}>
          <IoIosApps size={35} />
        </button>
      </Link>
      <Link
        to="δεξιότητες"
        className=" ctrl-link4"
        onClick={() => {
          toggleSection('δεξιότητες');
        }}
      >
        <button
          className={τομέαςΑρχικής === 'δεξιότητες' ? 'btn  active-btn' : 'btn'}
        >
          <FaCheck size={35} />
        </button>
      </Link>
      <Link
        to="ενδιαφέροντα"
        className=" ctrl-link5"
        onClick={() => {
          toggleSection('ενδιαφέροντα');
        }}
      >
        <button
          className={τομέαςΑρχικής === 'ενδιαφέροντα' ? 'btn  active-btn' : 'btn'}
        >
          <FaStar size={35} />
        </button>
      </Link>
      <Link
        to="επικοινωνία"
        className=" ctrl-link6"
        onClick={() => {
          toggleSection('επικοινωνία');
        }}
      >
        <button
          className={τομέαςΑρχικής === 'επικοινωνία' ? 'btn  active-btn' : 'btn'}
        >
          <SiPlatformdotsh size={35} style={{ transform: 'rotate(180deg)' }} />
        </button>
      </Link>
    </Περιέκτης>
  );
};

const Περιέκτης = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-50%);
  position: fixed;
  top: 50%;
  right: 3%;
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
  .ctrl-link0,
  .ctrl-link1,
  .ctrl-link2,
  .ctrl-link3,
  .ctrl-link4,
  .ctrl-link5,
  .ctrl-link6 {
    padding: 7px 2px;
  }
`;

export default ΠλήκτραΕλέγχουΔεξιά;
