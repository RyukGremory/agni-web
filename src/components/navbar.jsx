import React from 'react'
import Container from 'react-bootstrap/Container'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation () {
  return (
    <Container>
      <Navbar bg='light' expand='lg' fixed='top'>
        <Navbar.Brand href='#'>Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/messages' className='nav-link'>Mensajes</Link>
            <Link to='/emails' className='nav-link'>Correo</Link>
            <Link to='/errors' className='nav-link'>Errores</Link>
            <Link disabled href='#' className='nav-link'>Disabled</Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl type='search' placeholder='Search' className='mr-2' aria-label='Search' />
            <Button variant='outline-success' type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Navigation
