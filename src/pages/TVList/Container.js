import React from 'react';
import TVListPresenter from './Presenter';
import { tvApi } from 'api';

class TVListContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    topRatedLoading: true,
    popularLoading: true,
    airingTodayLoading: true,
  };

  fetchTopRated = async () => {
    try {
      const { data: { results: topRated } } = await tvApi.fetchTopRated();
      this.setState({ topRated });
    } catch {
      this.setState({ error: "Can't find TVs toprated information."});
    } finally {
      this.setState({ topRatedLoading: false });
    }
  };

  fetchPopular = async () => {
    try {
      const { data: { results: popular } } = await tvApi.fetchPopular();
      this.setState({ popular });
    } catch {
      this.setState({ error: "Can't find TVs popular information."});
    } finally {
      this.setState({ popularLoading: false });
    }
  };

  fetchAiringToday = async () => {
    try {
      const { data: { results: airingToday } } = await tvApi.fetchAiringToday();
      this.setState({ airingToday });
    } catch {
      this.setState({ error: "Can't find TVs airingToday information."});
    } finally {
      this.setState({ airingTodayLoading: false });
    }
  };

  componentDidMount() {
    this.fetchTopRated();
    this.fetchPopular();
    this.fetchAiringToday();
  }

  // componentDidMount() {
  //   Promise.all([tvApi.fetcTopRated(), tvApi.fetchPopular(), tvApi.fetchAiringToday()])
  //   .then(([{ data: { results: topRated }}, { data: { results: popular }}, { data: { results: airingToday }}]) => this.setState({ topRated, popular, airingToday}))
  //   .catch(err => this.setState({ error: "Can't find TVs information."}))
  //   .finally(() => this.setState({ loading: false }));
  // }

  render() {
    const { topRated, popular, airingToday, error, topRatedLoading, popularLoading, airingTodayLoading } = this.state;

    return (
      <TVListPresenter 
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={topRatedLoading && popularLoading && airingTodayLoading}
        error={error}
      />
    );
  }
}

export default TVListContainer;