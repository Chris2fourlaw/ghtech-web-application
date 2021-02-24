import React from 'react';

import Button from 'react-bootstrap/Button';
import { Link, withRouter } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Landing page.</h1>
    <p className="lead">This is the landing page.</p>
    <p className="lead">
      <Link to="/login">
        <Button variant="secondary" size="large" className="fw-bold border-white bg-white">Go To Login</Button>
      </Link>
    </p>
  </div>
);

export default withRouter(Home);
