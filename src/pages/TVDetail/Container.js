import React from 'react';
import Presenter from './Presenter';

class Container extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  render() {
    const { result, error, loading } = this.state;

    return (
      <Presenter 
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}

export default Container;