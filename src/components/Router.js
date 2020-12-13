import React from 'react';
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
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