import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='container mt-5'>
       <Navbar bg="dark" variant="dark">
           <Container>
                <Navbar.Brand className='m-auto' href="/home">Home</Navbar.Brand>
                <Nav className="m-auto">
                    <Nav.Link><Link className='text-decoration-none text-light' to='/home'> Home</Link></Nav.Link>
                    <Nav.Link><Link className='text-decoration-none text-light' to='/about'>About</Link></Nav.Link>
                </Nav>
                <Link className='btn btn-outline-info m-auto' to='/add-user' >Add User</Link>
            </Container>
        </Navbar>
                    
        </div>
    )
}

export default NavBar
