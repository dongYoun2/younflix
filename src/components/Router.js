import React from 'react';
import Home from 'pages/Home';
import TV from 'pages/TV';
import Search from 'pages/Search';
import Header from 'components/Header';
import { 
  BrowserRouter, 
  Route, 
  Switch, 
  Redirect 
} from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;