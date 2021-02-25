import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigation = () => (
  <div>
    <h3 className="masthead-brand">GHTech Web Application</h3>
    <nav className="nav nav-masthead justify-content-center">
      <Link className="nav-link active" aria-current="page" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/login">
        Log In
      </Link>
    </nav>
  </div>
);

export default withRouter(Navigation);
