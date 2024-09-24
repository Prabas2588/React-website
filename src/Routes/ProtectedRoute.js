import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { logo } from '../assets';
import DynamicNav from '../components/Menu/DynamicNav';
import Topbar from '../components/Topbar';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
 
const ProtectedRoute = () => { 
    return (
        <Container fluid>
            <Row>
                {/* Left Side Menu */}
                <Col xs={2} className="bg-dark p-0" style={{ height: '100vh' }}>
                    <div className="d-flex align-items-center mb-4" style={{paddingRight:'1px'}}>
                        <img src={logo} className='img-thumbnail border-0 rounded-0' alt="Logo" />
                    </div>
                    <DynamicNav />
                </Col>

                {/* Main Content Area */}
                <Col xs={10} className='p-0'>
                    <Topbar />
                    <Outlet />
                </Col>
            </Row>
        </Container>
    );
};

export default ProtectedRoute;
