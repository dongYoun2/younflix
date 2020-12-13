import React from 'react';
import Presenter from './Presenter';

class Container extends React.Component {
  state = {
    movies: null,
    tvs: null,
    searchTerm: '',
    loading: false,
    error: null,
  };

  render() {
    const { movies, tvs, searchTerm, loading, error } = this.state;

    return (
      <Presenter
        movies={movies}
        tvs={tvs}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
      />
    );
  }
}

export default Container;