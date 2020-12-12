import React from 'react';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Header from 'components/Header';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect 
} from 'react-router-dom';

export default function() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
