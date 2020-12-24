import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function SearchPresenter({ movies, tvs, searchTerm, isLoading, error, handleSubmit }) {
  return (
    <div>Search</div>
  );
}

SearchPresenter.propTypes = {
  movies: PropTypes.array,
  tvs: PropTypes.array,
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
}

export default SearchPresenter;
