import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const Navbarr = () => {
  return (
    <div >
        <Navbar style={{background:"#393939", }}>
    <Container >
    <Navbar.Brand href="#home" style={{color:"white" , fontFamily:"Hubballi" , fontSize :"30px" , marginRight:"30px"}}>ShowRoom</Navbar.Brand>
    <Nav className="me-auto"  >
      <Nav.Link  href="#home" style={{color:"white" , fontFamily:"Roboto"}}>Home</Nav.Link>
      <Nav.Link href="#features" style={{color:"white" , fontFamily:"Roboto"}}>Features</Nav.Link>
      <Nav.Link href="#pricing" style={{color:"white" , fontFamily:"Roboto"}}>Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}
