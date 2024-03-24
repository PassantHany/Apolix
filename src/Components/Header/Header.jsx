import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import { useState } from "react";

import { FaCertificate } from "react-icons/fa";
import "./Header.css";
import "animate.css/animate.css";

const Header = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);
  const [isNavBrandHovered, setIsNavBrandHovered] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);

  const navlinkStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "24px",
    color: "white",
    position: "relative",
  };

  const navBrandStyle = {
    color: "white",
    fontSize: "60px",
    letterSpacing: isNavBrandHovered ? "8px" : "3px",
    transition: "letter-spacing 0.3s ease",
  };

  const handleNavBrandMouseEnter = () => {
    setIsNavBrandHovered(true);
  };

  const handleNavBrandMouseLeave = () => {
    setIsNavBrandHovered(false);
  };

  const handleSolutionsMouseEnter = () => {
    setIsSolutionsHovered(true);
  };

  const handleSolutionsMouseLeave = () => {
    setIsSolutionsHovered(false);
  };
  const handleIconMouseLeave = () => {
    setShowIcon(false);
    setIsIconVisible(false);
  };
  const handleIconMouseEnter = () => {
    setShowIcon(true);
    setIsIconVisible(true);
  };
  const dropdownStyle = {
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "24px",
    color: "white", // Title color
  };

  return (
    <>
      <Container style={{ marginLeft: "100px" }}>
        <Row>
          <Navbar expand="lg" className="nav">
            <Col sm={3} xs={6} style={{ marginTop: "50px" }}>
              <Navbar.Brand
                style={navBrandStyle}
                href="#"
                className="navBrand"
                onMouseEnter={handleNavBrandMouseEnter}
                onMouseLeave={handleNavBrandMouseLeave}
              >
                <p>apolix</p>
              </Navbar.Brand>
            </Col>
            <Col sm={9} xs={6} style={{ marginBottom: "30px" }}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link style={navlinkStyle} className="navLink" href="#">
                    <span>Process Mining</span>
                  </Nav.Link>

                  <NavDropdown
                    style={dropdownStyle}
                    title={<span style={{ color: "white" }}>Solutions</span>}
                    id="basic-nav-dropdown"
                    show={isSolutionsHovered}
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                    className="custom-dropdown"
                  >
                    <NavDropdown.Item
                      href="#action/3.1"
                      style={{ color: "white" }}
                    >
                      Solution 1
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.2"
                      style={{ color: "white" }}
                    >
                      Solution 2
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="#action/3.3"
                      style={{ color: "white" }}
                    >
                      Solution 3
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link style={navlinkStyle} className="navLink" href="#">
                    <span>Contact</span>
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      padding: "10px 20px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "24px",
                      color: "white",
                      position: "relative",
                      marginLeft: "100px",
                    }}
                    id="demo"
                    className="navLink"
                    href="#"
                    onMouseEnter={handleIconMouseEnter}
                    onMouseLeave={handleIconMouseLeave}
                  >
                    <span id="span">
                      Schedule a demo
                      {isIconVisible && (
                        <FaCertificate
                          id="icon"
                          className={`circular-icon animate__animated ${
                            showIcon ? "animate__fadeInBottomRight" : "hidden"
                          }`}
                          style={{
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                          }}
                        />
                      )}
                    </span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default Header;
