import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function MovieDetailPresenter({ data, error, isLoading }) {
  return (
    <div>Movie Detail</div>
  );
}

MovieDetailPresenter.propTypes = {
  data: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default MovieDetailPresenter;