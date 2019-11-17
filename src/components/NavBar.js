import * as React from 'react';
import smallLogo from '../images/remotion-small.png';
import textLogo from '../images/remotion-text.png';
import { Link } from "react-router-dom";

import './NavBar.scss';

const NavBar = () => {

  return (
    <div className="NavBar">
      <Link to="/">
        <div className="NavBar__logo">
          <img src={smallLogo} style={{ width: '30px' }}/>
          <img src={textLogo} style={{ width: '120px', height: '20px', paddingLeft: '10px' }}/>
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
