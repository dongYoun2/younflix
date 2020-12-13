import React from 'react';
import TVPresenter from './Presenter';
import { tvApi } from 'api';

class TVContainer extends React.Component {
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
      <TVPresenter 
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}

export default TVContainer;