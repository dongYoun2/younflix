import React from 'react';
import MoviePresenter from './Presenter';
import { movieApi } from 'api';

class MovieContainer extends React.Component {
  state = {
    nowPlaying: null,
    upoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const { data: { results: nowPlaying } } = await movieApi.fetchNowPlaying();
      const { data: { results: upcoming } } = await movieApi.fetchUpcoming();
      const { data: { results: popular } } = await movieApi.fetchPopular();

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
      <MoviePresenter 
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default MovieContainer;