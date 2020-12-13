import React from 'react';
import Movie from 'pages/Movie';
import TV from 'pages/TV';
import Search from 'pages/Search';
import MovieDetail from 'pages/MovieDetail';
import TVDetail from 'pages/TVDetail';
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
        <Route path="/" exact component={Movie} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={MovieDetail} />
        <Route path="/tv/:id" exact component={TVDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;