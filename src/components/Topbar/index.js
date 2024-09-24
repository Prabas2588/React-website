import React, { useState } from 'react';
import { Popover, Button, InputGroup, FormControl, OverlayTrigger } from 'react-bootstrap';
import { FaSignOutAlt, FaKey, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
    const navigate = useNavigate();
    const [showPopover, setShowPopover] = useState(false);

    const handleTogglePopover = () => {
        setShowPopover(!showPopover);
    };
    const handleLogout = async (action) => {
        const token = localStorage.getItem("authToken");
        try {
            //await logout(token);
            localStorage.clear();
            navigate("/");
        } catch (error) {}
    };
    

    const popover = (
        <Popover id="profile-popover p-2">
          <Popover.Body> 
            <ul className="list-unstyled mb-0">
              <li style={{borderBottom: "1px solid #dee2e6"}}>
                <Button variant="link" className="d-block text-start text-decoration-none" onClick={() => alert('Reset Password')}>
                  <FaKey /> Reset Password
                </Button>
              </li>
              <li>
                <Button variant="link" className="d-block text-start text-danger  text-decoration-none" onClick={() => handleLogout()}>
                  <FaSignOutAlt /> Logout
                </Button>
              </li>
            </ul>
          </Popover.Body>
        </Popover>
      );

    return (
        <div className="d-flex justify-content-between align-items-center p-2 px-3 border-bottom">
            <h3>Dashboard</h3>
            <div className="d-flex align-items-center">
                <InputGroup style={{ width: '250px', marginRight: "16px" }}>
                    <FormControl
                        placeholder="Search..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">
                        <FaSearch />
                    </InputGroup.Text>
                </InputGroup>
                <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popover}
                    rootClose
                    onToggle={handleTogglePopover}
                    show={showPopover}
                >
                    <Button variant="light" className="p-0" style={{ backgroundColor: 'transparent', border: 'none' }} onClick={handleTogglePopover}>
                        <FaUserCircle style={{ fontSize: '40px' }} />
                    </Button>
                </OverlayTrigger>
            </div>
        </div>
    );
}
