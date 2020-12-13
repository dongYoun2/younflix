import React from 'react';
import Presenter from './Presenter';

class Container extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingTody: null,
    loading: true,
    error: null,
  };

  render() {
    const { topRated, popular, airingTody, loading, error } = this.state;

    return (
      <Presenter 
        topRated={topRated}
        popular={popular}
        airingTody={airingTody}
        loading={loading}
        error={error}
      />
    );
  }
}

export default Container;