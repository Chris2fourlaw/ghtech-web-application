import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { withRouter, NavLink } from 'react-router-dom';

const Navigation = () => (
  <div>
    <h3 className="masthead-brand">GHTech Web Application</h3>
    <Nav className="nav-masthead justify-content-center" activeKey="/">
      <Nav.Item>
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink exact to="/login" className="nav-link" activeClassName="active">Log In</NavLink>
      </Nav.Item>
    </Nav>
  </div>
);

export default withRouter(Navigation);
