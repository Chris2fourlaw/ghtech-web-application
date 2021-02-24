import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navigation = () => (
  <div>
    <h3 className="float-md-start mb-0">GHTech Web Application</h3>
    <nav className="nav nav-masthead justify-content-center float-md-end">
      <Link class="nav-link active" aria-current="page" to="/">
        Home
      </Link>
      <Link class="nav-link" to="/login">
        Log In
      </Link>
    </nav>
  </div>
);

export default withRouter(Navigation);
