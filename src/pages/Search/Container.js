import React from 'react';
import SearchPresenter from './Presenter';
import { movieApi, tvApi } from 'api';

class SearchContainer extends React.Component {
  state = {
    movies: null,
    tvs: null,
    searchTerm: '',
    loading: false,
    error: null,
  };

  handleSubmit = () => {
    if(this.state.searchTerm !== '') {
      this.search();
    }
  };

  searchMovies = async () => {
    const { searchTerm } = this.state;

    try {
      const { data: { results: movies } } = await movieApi.searchByTerm(searchTerm);
      this.setState({ movies });
    } catch {
      this.setState({ error: "Can't find any movies results." });
    } finally {
      return true;
    }
  };

  searchTVs = async () => {
    const { searchTerm } = this.state;

    try {
      const { data: { results: tvs } } = await tvApi.searchByTerm(searchTerm);
      this.setState({ tvs });
    } catch {
      this.setState({ error: "Can't find any TVs results." });
    } finally {
      return true;
    }
  };

  search = () => {
    this.setState({ loading: true });
    
    Promise.all([this.searchMovies(), this.searchTVs()])
    .then(values => {
      if(values.every(value => value === true)) {
        this.setState({ loading: false });
      }
    });
  };

  render() {
    const { movies, tvs, searchTerm, loading, error } = this.state;
    console.log(this.state);

    return (
      <SearchPresenter
        movies={movies}
        tvs={tvs}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchContainer;