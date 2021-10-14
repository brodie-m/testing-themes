import React from 'react'
import { Navbar, NavLink, Container } from 'react-bootstrap'
import {useAuthContext} from './contexts/Auth'
export default function CustomNavbar({loggedIn}) {
    // const currentUser = useAuthContext()
    function handleClick() {
        localStorage.clear();
        window.location.href='/home';
        
    }
    return (
        <Navbar>
           <Container>
               <Navbar.Brand>
                   <NavLink to='/home'>CNN  N</NavLink>
               </Navbar.Brand>
               <NavLink>Breaking News</NavLink>
               <NavLink>Entertainment</NavLink>
               <NavLink>Recommended</NavLink>
               <NavLink to={loggedIn ? "/logout" : '/login'} onClick={handleClick}>{loggedIn ? 'Logged in! Click to log out':'Log in'} </NavLink>
           </Container> 
        </Navbar>
    )
}
