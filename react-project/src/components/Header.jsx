import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
        return (
            <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark'>
                <Container fluid>
                    <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' width={'5%'} height={'5%'}></img>
                    <Navbar.Brand href="#" className='text-danger'></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/' className='link-item'>Home</Link>
                            <Link to="/" className='link-item'>Movies</Link>
                        
                        
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

export default Header