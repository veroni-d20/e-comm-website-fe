import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";

export default function Menubar() {
  return (
    <Navbar
      key="md"
      expand="md"
      fixed="top"
      bg="light"
      data-bs-theme="light"
      style={{ height: "80px", zIndex: 9 }}
      className="bg-body-tertiary mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="Ecom"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-$md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-$md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-$md`}>
              Wyntra
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link className="navlink" href="#home">
                MEN
              </Nav.Link>
              <Nav.Link className="navlink" href="#features">
                WOMEN
              </Nav.Link>
              <Nav.Link className="navlink" href="#pricing">
                KIDS
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="navlink-icon" href="#pricing">
                <FontAwesomeIcon icon={faHeart} size="lg" className="mx-2" />
                <p style={{ fontSize: "11px" }}>Wishlist</p>
              </Nav.Link>
              <Nav.Link className="navlink-icon" href="#pricing">
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                <p style={{ fontSize: "11px" }}>Cart</p>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
