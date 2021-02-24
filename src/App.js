import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Header, Footer, Home,
} from './components';

const App = () => (
  <Router>
    <Header />
    <main className="px-3">
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        {/* <Route path="/login" exact component={() => <Login />} /> */}
      </Switch>
    </main>
    <Footer />
  </Router>
);

export default App;
