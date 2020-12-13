import React from 'react';
import Presenter from './Presenter';
import { tvApi } from 'api';

class Container extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const { data: { results: topRated } } = await tvApi.getTopRated();
      const { data: { results: popular } } = await tvApi.getPopular();
      const { data: { results: airingToday } } = await tvApi.getAiringToday();

      this.setState({ topRated, popular, airingToday });
    } catch {
      this.setState({ error: "Can't find TVs information." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;

    return (
      <Presenter 
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default Container;