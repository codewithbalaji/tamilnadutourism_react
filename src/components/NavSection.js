import React from 'react';
import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

const NavSection = () => {
  const navLinkStyle = {
    textDecoration: 'none',
    cursor: 'pointer',
    fonWeight: 'bold',
    fontSize: '20px',
  };
  return (
    <Container>
      <br />
      <Nav className="justify-content-around " activeKey="/home">
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="chennai"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Chennai
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="kodaikanal"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Kodaikanal
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="madurai"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Madurai
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="kumbakonam"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Kumbakonam
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="theni"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Theni
          </Link>
        </Nav.Item>
      </Nav>
      <Nav className="justify-content-around" activeKey="/home">
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="rameswaram"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Rameswaram
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="ooty"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Ooty
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="kanyaKumari"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Kanyakumari
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="yercaud"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Yarcaud
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link
            className="text-primary"
            style={navLinkStyle}
            to="hogenakkal"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Hogenakkal
          </Link>
        </Nav.Item>
      </Nav>
      <br />
      <br />
    </Container>
  );
};

export default NavSection;
