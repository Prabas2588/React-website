import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 
import Contents from './Contents';


const Dashboard = () => {
  return (
    <Container flui>
      <Row>
        <Col xs={12} className='p-3'>
 
  
      <Contents />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
