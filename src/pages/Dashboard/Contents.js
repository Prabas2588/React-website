import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { mainMenuItems } from "../../data/mockData";

const StaticNav = () => {
  const filteredMenuItems = mainMenuItems.filter(item => item.label.toLowerCase() !== 'home');

  return (
   
    <Container>
      <Row xs={2} md={5} className="g-4">
        {filteredMenuItems.map((item, index) => (
          <Col key={index}>
            <NavLink to={item.href} className="nav-link-card" style={{ textDecoration: 'none' }}>
              <Card className="text-center h-100">
                <Card.Body className="d-flex flex-column align-items-center">
                  <span className="icon-large mb-3">
                    <h1>{item.icon}</h1>
                  </span>
                  <Card.Title className="text-center">
                    {item.label}
                  </Card.Title>
                </Card.Body>
              </Card>
            </NavLink>
          </Col>
        ))}
      </Row>
    </Container>
 
  );
};

export default StaticNav;