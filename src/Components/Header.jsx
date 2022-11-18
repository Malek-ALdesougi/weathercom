import React, {useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

function Header(props) {
  const [showNavColor, setShowNavColor] = useState(false);
  // const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  // const [showNavColorThird, setShowNavColorThird] = useState(false);

 console.log(props.userStatus);
  
  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer >
          <MDBNavbarBrand className='fw-bolder fs-4' href='/'>WeatherCom</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}>

            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link to='/' className='text-light p-3' aria-current='page'>Home</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                {/* <MDBNavbarLink href='forecast/:name'>Forecast</MDBNavbarLink> */}
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='text-light p-3' to='about'>About</Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link className='text-light p-3' to={'contact'}>Contact</Link>
              </MDBNavbarItem>

              <MDBContainer className='d-flex justify-content-end'>
                <MDBNavbarItem>
                  <LoginButton />
                  <LogoutButton />
                </MDBNavbarItem>
              </MDBContainer>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;