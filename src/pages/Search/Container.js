import React from 'react';
import SearchPresenter from './Presenter';
import { movieApi, tvApi } from 'api';

class SearchContainer extends React.Component {
  state = {
    movies: [],
    tvs: [],
    searchTerm: '',
    isLoading: false,
    error: null,
  };

  handleTermChange = (e) => {
    const { currentTarget: { value } } = e;
    this.setState({ searchTerm: value });
  };

  handleTermSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;

    if(searchTerm !== '') {
      this.search(searchTerm);
    }
  };

  searchMovies = async (term) => {
    try {
      const { data: { results: movies } } = await movieApi.searchByTerm(term);
      this.setState({ movies });
    } catch {
      this.setState({ error: "Can't find any movies results." });
    } finally {
      return true;
    }
  };

  searchTVs = async (term) => {
    try {
      const { data: { results: tvs } } = await tvApi.searchByTerm(term);
      this.setState({ tvs });
    } catch {
      this.setState({ error: "Can't find any TVs results." });
    } finally {
      return true;
    }
  };

  search = (term) => {
    this.setState({ isLoading: true });

    Promise.all([this.searchMovies(term), this.searchTVs(term)])
    .then(values => {
      if(values.every(value => value === true)) {
        this.setState({ isLoading: false });
      }
    });
  };

  render() {
    const { movies, tvs, searchTerm, isLoading, error } = this.state;

    return (
      <SearchPresenter
        movies={movies}
        tvs={tvs}
        searchTerm={searchTerm}
        isLoading={isLoading}
        error={error}
        handleTermSubmit={this.handleTermSubmit}
        handleTermChange={this.handleTermChange}
      />
    );
  }
}

export default SearchContainer;