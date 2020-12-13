import React from 'react';
import MovieDetailPresenter from './Presenter';

class MovieDetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  render() {
    const { result, error, loading } = this.state;

    return (
      <MovieDetailPresenter 
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}

export default MovieDetailContainer;