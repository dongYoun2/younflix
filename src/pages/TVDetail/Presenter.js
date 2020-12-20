import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TVDetailPresenter({ data, error, isLoading }) {
  return (
    <div>TV Detail</div>
  );
}

TVDetailPresenter.propTypes = {
  data: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default TVDetailPresenter;