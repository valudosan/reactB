import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="primary" expand="lg">
      <Container>
        <Link to="/"><h2>VALU-VAPE</h2></Link>
        <NavDropdown style={{fontSize:"1.5rem"}} title="Productos">
          <NavDropdown.Item > <Link to='/equipos'> <h3>Equipos</h3> </Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to='/kits'> <h3>Kits</h3> </Link> </NavDropdown.Item>
          <NavDropdown.Item > <Link to='/liquidos'> <h3>Líquidos</h3> </Link> </NavDropdown.Item>
        </NavDropdown>
        <Link to="/carrito"><CartWidget/></Link>
      </Container>
    </Navbar>
  );
}
