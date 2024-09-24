import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';  
import { mainMenuItems } from "../../data/mockData";
import './DynamicNav.css'; 

const DynamicNav = () => {
  return (
    <Nav className="flex-column">
      {mainMenuItems.map((item, index) => (
        <Nav.Link
          as={NavLink}
          to={item.href}
          key={index}
          className={({ isActive }) =>
            `nav-link-custom ${isActive ? 'active' : ''}`
          }
          style={{ padding: '0.5rem 1rem' }}
        >
          <span className="mx-2" style={{ marginTop: "-4px" }}>
            {item.icon}
          </span>
          <span>{item.label}</span>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default DynamicNav;
