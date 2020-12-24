import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Section from 'components/Section';

const Container = styled.div`
  padding: 0 30px;
`
function TVListPresenter({ topRated, popular, airingToday, isLoading, error }) {
  if(isLoading) {
    return <Loader />;
  }

  if(error) {
    return <h3>Something went wrong.</h3>;
  }

  return (
    <Container>
      <Section title="Top Rated Shows">
        {topRated.map(show => <span>{show.name}</span>)}
      </Section>
      <Section title="Popular Shows">
        {popular.map(show => <span>{show.name}</span>)}
      </Section>
      <Section title="Airing Today">
        {airingToday.map(show => <span>{show.name}</span>)}
      </Section>
    </Container>
  );
}

TVListPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default TVListPresenter;