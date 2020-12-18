import React from 'react';
import MovieListPresenter from './Presenter';
import { movieApi } from 'api';

class MovieListContainer extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  fetchNowPlaying = async () => {
    try {
      const { data: { results: nowPlaying } } = await movieApi.fetchNowPlaying();
      this.setState({ nowPlaying });
    } catch {
      this.setState({ error: "Can't find movies nowplaying information."});
    }
  };

  fetchUpcoming = async () => {
    try {
      const { data: { results: upcoming } } = await movieApi.fetchUpcoming();
      this.setState({ upcoming });
    } catch {
      this.setState({ error: "Can't find movies upcoming information."});
    }
  };

  fetchPopular = async () => {
    try {
      const { data: { results: popular } } = await movieApi.fetchPopular();
      this.setState({ popular });
    } catch {
      this.setState({ error: "Can't find movies popular information."});
    }
  };

  componentDidMount() {
    this.fetchNowPlaying();
    this.fetchUpcoming();
    this.fetchPopular();
    this.setState({ loading: false });
  }

  // componentDidMount() {
  //   Promise.all([movieApi.fetchNowPlaying(), movieApi.fetchUpcoming(), movieApi.fetchPopular()])
  //   .then(([{ data: { results: nowPlaying } }, { data: { results: upcoming } }, { data: { results: popular } }]) => this.setState({ nowPlaying, upcoming, popular }))
  //   .catch(err => this.setState({ error: "Can't find movies inforamtion."}))
  //   .finally(() => this.setState({ loading: false }));
  // }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return (
      <MovieListPresenter 
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default MovieListContainer;