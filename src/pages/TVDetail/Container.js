import React from 'react';
import TVDetailPresenter from './Presenter';

class TVDetailContainer extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  render() {
    const { result, error, loading } = this.state;

    return (
      <TVDetailPresenter 
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}

export default TVDetailContainer;