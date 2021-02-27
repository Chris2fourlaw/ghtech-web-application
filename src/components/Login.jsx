import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: false, incorrect: false };
  }

  componentDidMount() { // check to see if already signed in.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in
      const { user } = userCredential;
      this.setState({ user });
    }).catch((error) => {
      if (error.code === 'auth/user-not-found') {
        console.log('Incorrct username/password');
        this.setState({ incorrect: true });
      }
    });
  }

  render() {
    const { user, incorrect } = this.state;

    if (user) {
      return <Redirect to="/contacts" />;
    }

    return (
      <div>
        <h1 className="login-heading">Please sign in.</h1>
        <Form className="form-signin" onSubmit={(e) => { this.onFormSubmit(e); }}>
          <Alert show={incorrect} variant="danger" onClick={() => this.setState({ incorrect: false })} dismissible>Incorrect Username/Password</Alert>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required autoComplete="on" />
          </Form.Group>
          <Button variant="primary" size="lg" className="btn-block" type="submit">Sign in</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
