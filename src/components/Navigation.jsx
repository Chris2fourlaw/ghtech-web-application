import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { withRouter, NavLink } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth: false, userLink: '/login', userText: 'Log In' };
  }

  componentDidMount() { // check to see if already signed in.
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ auth: user, userLink: '#', userText: 'Log Out' });
      } else {
        this.setState({ auth: false, userLink: '/login', userText: 'Log In' });
      }
    });
  }

  userLinkClickHandler() {
    const { auth } = this.state;
    if (auth) {
      firebase.auth().signOut();
      console.log('signed out');
    }
  }

  render() {
    const { auth, userLink, userText } = this.state;
    return (
      <div>
        <h3 className="masthead-brand">GHTech Web Application</h3>
        <Nav className="nav-masthead justify-content-center" activeKey="/">
          <Nav.Item>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </Nav.Item>
          { auth ? (
            <Nav.Item>
              <NavLink exact to="/contacts" className="nav-link" activeClassName="active">Contacts</NavLink>
            </Nav.Item>
          ) : null }
          { auth ? (
            <Nav.Item>
              <NavLink exact to="/chatroom" className="nav-link" activeClassName="active">Chat Room</NavLink>
            </Nav.Item>
          ) : null }
          <Nav.Item>
            <NavLink exact to={userLink} onClick={() => { this.userLinkClickHandler(); }} className="nav-link" activeClassName="active">{userText}</NavLink>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default withRouter(Navigation);
