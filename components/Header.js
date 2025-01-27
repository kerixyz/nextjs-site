import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 180) {
      setSticky(true);
    } else if (window.scrollY < 180) {
      setSticky(false);
    }
  }

  return (
    <Navbar color="light" light container="md" expand="md" style={{padding:'0% 5% 0%'}}>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src="/images/evalubot-icon.svg"
          style={{
            height: 50,
            width: 50,
            padding: '0% 5% 0%'
          }}
        />
        Evalubot
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <Nav className="m-auto" navbar>
            
            {/* <NavItem>
              <NavLink href="#feature">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="try">Try It Out</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink href="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem> */}
          </Nav>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;
