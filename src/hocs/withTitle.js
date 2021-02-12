import React from "react";
import Helmet from "react-helmet";

function withTitle(Component, title) {
  return function (props) {
    return (
      <>
        <Helmet>
          <title>{title} | Younflix</title>
        </Helmet>
        {Component && <Component {...props} />}
      </>
    );
  };
}

export default withTitle;
