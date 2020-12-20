import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TVListPresenter({ topRated, popular, airingToday, isLoading, error }) {
  return (
    <div>TV shows</div>
  );
}

TVListPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVListPresenter;