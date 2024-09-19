import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const BarraNavegacao = () => {
  
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/dashboard">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Tabelas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/alunos">Alunos</NavDropdown.Item>
                <NavDropdown.Item href="#">...</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>);
};

export default BarraNavegacao;

