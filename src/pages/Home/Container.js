import React from 'react';
import Presenter from './Presenter';
import { movieApi } from 'api';

class Container extends React.Component {
  state = {
    nowPlaying: null,
    upoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: { results: nowPlaying } } = await movieApi.getNowPlaying();
      const { data: { results: upcoming } } = await movieApi.getUpcoming();
      const { data: { results: popular } } = await movieApi.getPopular();

      this.setState({ nowPlaying, upcoming, popular });
    } catch {
      this.setState({ error: "Can't find movies information." });
    } finally {
      this.setState({ loading: false });
    }
  }

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