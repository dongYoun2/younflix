import React from 'react';
import TVListPresenter from './Presenter';
import { tvApi } from 'api';

class TVListContainer extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  fetchTopRated = async () => {
    try {
      const { data: { results: topRated } } = await tvApi.fetchTopRated();
      this.setState({ topRated });
    } catch {
      this.setState({ error: "Can't find TVs toprated information."});
    }
  };

  fetchPopular = async () => {
    try {
      const { data: { results: popular } } = await tvApi.fetchPopular();
      this.setState({ popular });
    } catch {
      this.setState({ error: "Can't find TVs popular information."});
    }
  };

  fetchAiringToday = async () => {
    try {
      const { data: { results: airingToday } } = await tvApi.fetchAiringToday();
      this.setState({ airingToday });
    } catch {
      this.setState({ error: "Can't find TVs airingToday information."});
    }
  };

  componentDidMount() {
    this.fetchTopRated();
    this.fetchPopular();
    this.fetchAiringToday();
    this.setState({ loading: false });
  }

  // componentDidMount() {
  //   Promise.all([tvApi.fetcTopRated(), tvApi.fetchPopular(), tvApi.fetchAiringToday()])
  //   .then(([{ data: { results: topRated }}, { data: { results: popular }}, { data: { results: airingToday }}]) => this.setState({ topRated, popular, airingToday}))
  //   .catch(err => this.setState({ error: "Can't find TVs information."}))
  //   .finally(() => this.setState({ loading: false }));
  // }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;

    return (
      <TVListPresenter 
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVListContainer;