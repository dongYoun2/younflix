import React from 'react';
import TVListPresenter from './Presenter';
import { tvApi } from 'api';

class TVListContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    isTopRatedLoading: true,
    isPopularLoading: true,
    isAiringTodayLoading: true,
  };

  fetchTopRated = async () => {
    try {
      const { data: { results: topRated } } = await tvApi.fetchTopRated();
      this.setState({ topRated });
    } catch {
      this.setState({ error: "Can't find TVs toprated information."});
    } finally {
      this.setState({ isTopRatedLoading: false });
    }
  };

  fetchPopular = async () => {
    try {
      const { data: { results: popular } } = await tvApi.fetchPopular();
      this.setState({ popular });
    } catch {
      this.setState({ error: "Can't find TVs popular information."});
    } finally {
      this.setState({ isPopularLoading: false });
    }
  };

  fetchAiringToday = async () => {
    try {
      const { data: { results: airingToday } } = await tvApi.fetchAiringToday();
      this.setState({ airingToday });
    } catch {
      this.setState({ error: "Can't find TVs airingToday information."});
    } finally {
      this.setState({ isAiringTodayLoading: false });
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
  //   .finally(() => this.setState({ isLoading: false }));
  // }

  render() {
    const { topRated, popular, airingToday, error, isTopRatedLoading, isPopularLoading, isAiringTodayLoading } = this.state;

    return (
      <TVListPresenter 
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        isLoading={isTopRatedLoading || isPopularLoading || isAiringTodayLoading}
        error={error}
      />
    );
  }
}

export default TVListContainer;