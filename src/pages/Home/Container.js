import React from 'react';
import Presenter from './Presenter';

class Container extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };

  render() {
    const { nowPlaying, upComing, popular, error, loading } = this.state;

    return (
      <Presenter 
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default Container;