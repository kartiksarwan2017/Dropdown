import React from 'react';
import "./Header.scss";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
    <div>
    <Navbar bg="dark" variant="dark">
        <Container className='navbar-container'>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="./dropdown-icon.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            <h1>Dropdown</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header;