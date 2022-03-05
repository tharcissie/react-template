import React, { useState } from 'react'
import {
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';



const Header = () => {

  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <Navbar expand='lg' className='navbar-dark'  style={{backgroundColor:'#03045E'}} >
      <MDBContainer fluid>
        <MDBNavbarBrand >My-App</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <Link style={{ textDecoration: "none" }} className='text-light nav-link' to='/'>
              All Users </Link>
            <Link to='/posts' className='text-light nav-link' style={{ textDecoration: "none" }} >Posts</Link>
            <Link style={{ textDecoration: "none" }} className='text-light nav-link' to='/albums'>Albums</Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </Navbar>
  )
}

export default Header