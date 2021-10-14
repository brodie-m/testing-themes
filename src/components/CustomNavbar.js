import React from 'react'
import { Navbar, NavLink, Container } from 'react-bootstrap'

export default function CustomNavbar() {
    return (
        <Navbar>
           <Container>
               <Navbar.Brand>
                   <NavLink>CNN  N</NavLink>
               </Navbar.Brand>
               <NavLink>Breaking News</NavLink>
               <NavLink>Entertainment</NavLink>
               <NavLink>Recommended</NavLink>
               <NavLink to="/login">Login</NavLink>
           </Container> 
        </Navbar>
    )
}
