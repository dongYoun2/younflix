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

  search = async () => {
    const { searchTerm } = this.state;

    this.setState({ loading: true });

    try {
      const { data: { results: movies } } = await movieApi.searchByTerm(searchTerm);
      const { data: { results: tvs } } = await tvApi.searchByTerm(searchTerm);

      this.setState({ movies, tvs });
    } catch {
      this.setState({ error: "Can't find any results" });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movies, tvs, searchTerm, loading, error } = this.state;

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