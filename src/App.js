import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Header, Footer, Home,
} from './components';

const App = () => (
  <Router>
    <div className="content-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header />
      <main role="main" className="inner content">
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          {/* <Route path="/login" exact component={() => <Login />} /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
