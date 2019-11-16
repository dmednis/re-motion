import * as React from 'react';
import {Button, Navbar} from "@blueprintjs/core";
import smallLogo from '../images/remotion-small.png';
import textLogo from '../images/remotion-text.png';
import {Link} from "react-router-dom";

const NavBar = () => {

  return (
    <Navbar className='bp3-dark'>
      <Navbar.Group align='left'>
        <Link to="/">
          <Navbar.Heading style={{display: 'flex', alignItems: 'center'}}>
            <img src={smallLogo} style={{width: '30px'}}/>
            <img src={textLogo} style={{width: '120px', height: '20px', marginLeft: '5px'}}/>
          </Navbar.Heading>
        </Link>
      </Navbar.Group>
    </Navbar>
  );
};

export default NavBar;
