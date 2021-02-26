import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => (
  <div>
    <h1 className="login-heading">Please sign in.</h1>
    <Form className="form-signin">
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className="checkbox mb-3" label="Remember me" />
      </Form.Group>
      <Button variant="primary" size="lg" className="btn-block" type="submit">Sign in</Button>
    </Form>
  </div>
);

export default Login;
