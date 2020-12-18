import React from 'react';
import MovieList from 'pages/MovieList';
import TVList from 'pages/TVList';
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
        <Route path="/" exact component={MovieList} />
        <Route path="/tv" exact component={TVList} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={MovieDetail} />
        <Route path="/tv/:id" exact component={TVDetail} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;