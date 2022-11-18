import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);

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
                  <Link to={'register'} className='text-light fs-6 fw-4'><i style={{ letterSpacing: '5px' }} class="fas fa-sign-in-alt">Login</i></Link>
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