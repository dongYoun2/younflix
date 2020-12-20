import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MovieListPresenter({ nowPlaying, upcoming, popular, error, isLoading }) {
  return (
    <div>Movie</div>
  );
}

MovieListPresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default MovieListPresenter;