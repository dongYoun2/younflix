import React from 'react';
import MovieListPresenter from './Presenter';
import { movieApi } from 'api';

class MovieListContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    isNowPlayingLoading: true,
    isUpcomingLoading: true,
    isPopularLoading: true,
  };

  fetchNowPlaying = async () => {
    try {
      const { data: { results: nowPlaying } } = await movieApi.fetchNowPlaying();
      this.setState({ nowPlaying });
    } catch {
      this.setState({ error: "Can't find movies nowplaying information."});
    } finally {
      this.setState({ isNowPlayingLoading: false });
    }
  };

  fetchUpcoming = async () => {
    try {
      const { data: { results: upcoming } } = await movieApi.fetchUpcoming();
      this.setState({ upcoming });
    } catch {
      this.setState({ error: "Can't find movies upcoming information."});
    } finally {
      this.setState({ isUpcomingLoading: false });
    }
  };

  fetchPopular = async () => {
    try {
      const { data: { results: popular } } = await movieApi.fetchPopular();
      this.setState({ popular });
    } catch {
      this.setState({ error: "Can't find movies popular information."});
    } finally {
      this.setState({ isPopularLoading: false });
    }
  };

  componentDidMount() {
    this.fetchNowPlaying();
    this.fetchUpcoming();
    this.fetchPopular();
  }

  render() {
    const { nowPlaying, upcoming, popular, error, isNowPlayingLoading, isUpcomingLoading, isPopularLoading } = this.state;

    return (
      <MovieListPresenter 
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        isLoading={isNowPlayingLoading || isUpcomingLoading || isPopularLoading }
      />
    );
  }
}

export default MovieListContainer;