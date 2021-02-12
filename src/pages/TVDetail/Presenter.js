import React from "react";
import PropTypes from "prop-types";
import Loader from "components/Loader";
import Message from "components/Message";
import Detail from "components/Detail";

function TVDetailPresenter({ tvs, error, isLoading }) {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  return <Detail data={tvs} />;
}

TVDetailPresenter.propTypes = {
  tvs: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default TVDetailPresenter;
