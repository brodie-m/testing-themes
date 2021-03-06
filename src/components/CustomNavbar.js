import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {useAuthContext} from './contexts/Auth'
export default function CustomNavbar({loggedIn}) {
    // const currentUser = useAuthContext()
    function handleClick() {
        if (!loggedIn) {
            window.location.href='/login'
        }
        else {
            localStorage.clear();
        window.location.href='/home';
        }
        
        
        
    }
    return (
        <Navbar>
           <Container>
               <Navbar.Brand>
                   <Nav.Link href='/home'>CNN  N</Nav.Link>
               </Navbar.Brand>
               <Nav.Link href='/breaking-news'>Breaking News</Nav.Link>
               <Nav.Link href='/entertainment'>Entertainment</Nav.Link>
               <Nav.Link href='/recommended'>Recommended</Nav.Link>
               <Nav.Link onClick={handleClick}>Logout</Nav.Link>
           </Container> 
        </Navbar>
    )
}
