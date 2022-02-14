import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <Nav>
            <Logo to="/">
                <i>{"MK "}<span>Recipe</span></i>
            </Logo>
    
            <Hamburger onClick={()=>setIsOpen(!isOpen)}>
                <span/>
                <span/>
                <span/>
            </Hamburger>

            <Menu isOpen={isOpen}>
                <MenuLink to="/about">About</MenuLink>
                <MenuLink to={{pathname:"https://github.com/Nonslip19"}}>Github</MenuLink>
                <MenuLink to="/Login">Login</MenuLink>
            </Menu>
        </Nav>
    </div>
  )
}

export default Navbar;