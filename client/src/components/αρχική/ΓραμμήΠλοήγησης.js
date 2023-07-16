import { AiFillHome } from 'react-icons/ai';
import { FaAlignRight, FaCaretDown } from 'react-icons/fa';
import { CircleFlag } from 'react-circle-flags';
import { useAppContext } from '../../context/appContext';
import translateText from '../../utils/μετάφρασηΚειμένου';
import { Λογότυπο } from '..';
import styled from 'styled-components';
import { useState } from 'react';

// import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const ΓραμμήΠλοήγησης = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const { γλώσσα, changeLanguage } = useAppContext();
  return (
    <Περιέκτης>
      <div className="αριστερή-στήλη">
        <div className="περιέκτης-αριστερή-στήλη">
          <AiFillHome className="btn" />
          <h5 className="btn">Βιογραφικό</h5>
        </div>
      </div>

      {/* <Λογότυπο /> */}

      <div className="δεξιά-στήλη">
        <div className="περιέκτης-δεξιά-στήλη">
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              <CircleFlag
                countryCode={translateText('gr', γλώσσα)}
                className="flag"
              />
              {showLanguages ? γλώσσα : ''}
              {showLanguages ? <FaCaretDown /> : ''}
            </button>
            <div
              className={
                showLanguages
                  ? 'dropdown show-dropdown show-dropdown-firstLanguage'
                  : 'dropdown'
              }
            >
              <button
                type="button"
                onClick={() => {
                  const newLanguage =
                    γλώσσα === 'ελληνικά' ? 'english' : 'ελληνικά';
                  changeLanguage(newLanguage);
                }}
                className="dropdown-btn"
              >
                {γλώσσα === 'ελληνικά' ? (
                  <CircleFlag countryCode="uk" className="flag-dropdown" />
                ) : (
                  <CircleFlag countryCode="gr" className="flag-dropdown" />
                )}
                {γλώσσα === 'ελληνικά' ? 'english' : 'ελληνικά'}
              </button>
            </div>
            <div
              className={
                showLanguages
                  ? 'dropdown show-dropdown show-dropdown-secondLanguage'
                  : 'dropdown'
              }
            >
              <button
                type="button"
                onClick={() => {
                  const newLanguage =
                    γλώσσα === 'svenska' ? 'english' : 'svenska';
                  changeLanguage(newLanguage);
                }}
                className="dropdown-btn"
              >
                {γλώσσα === 'svenska' ? (
                  <CircleFlag countryCode="uk" className="flag-dropdown" />
                ) : (
                  <CircleFlag countryCode="se" className="flag-dropdown" />
                )}
                {γλώσσα === 'svenska' ? 'english' : 'svenska'}
              </button>
            </div>
            {/* <div
              className={
                showLanguages
                  ? 'dropdown show-dropdown show-dropdown-exit'
                  : 'dropdown'
              }
            >
              <button className="dropdown-btn btn-exit" onClick={logoutUser}>
                {translateText('Έξοδος', language)}
              </button>
            </div> */}
          </div>
          <button
            type="button"
            className="btn toggle-btn"
            onClick={() => console.log('Μεταβολή πλαϊνής Στήλης')}
          >
            <FaAlignRight />
          </button>
        </div>
      </div>
    </Περιέκτης>
  );
};

const Περιέκτης = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1vw;
  background: #003f88;

  .αριστερή-στήλη {
    width: 250px;
    justify-content: left;
  }
  .περιέκτης-αριστερή-στήλη {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
  .δεξιά-στήλη {
    width: 250px;
    justify-content: right;
  }
  .περιέκτης-δεξιά-στήλη {
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
  }
  .logo {
    display: flex;
    align-items: center;
    margin-left: 140px;
    width: 50px;
  }

  .flag {
    width: 25px;
    height: 25px;
  }
  .flag-dropdown {
    margin-right: 10px;
    width: 13px;
    height: 13px;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    font-size: 20px;
  }

  .dropdown {
    position: absolute;
    top: 52px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    width: 100%;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  .show-dropdown-firstLanguage {
    margin-top: 0px;
  }
  .show-dropdown-secondLanguage {
    margin-top: 30px;
  }
  .show-dropdown-exit {
    margin-top: 60px;
  }
  .logo-text {
    display: none;
    margin: 0 0 0 135px;
  }
  .btn-exit {
    padding: 0.3rem 0;
    font-size: 20px;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;

export default ΓραμμήΠλοήγησης;
