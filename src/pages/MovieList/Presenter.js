import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Section from 'components/Section';

const Container = styled.div`
  padding: 0 30px;
`
function MovieListPresenter({ nowPlaying, upcoming, popular, error, isLoading }) {
  if(isLoading) {
    return <Loader />;
  }

  if(error) {
    return <h3>Something went wrong.</h3>;
  }

  // no error === nowPlaying, upcoming, popular all are array
  return (
    <Container>
      <Section title="Now Playing">
        {nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>)}
      </Section>
      <Section title="Upcoming Movies">
        {upcoming.map(movie => <span key={movie.id}>{movie.title}</span>)}
      </Section>
      <Section title="Popular Movies">
        {popular.map(movie => <span key={movie.id}>{movie.title}</span>)}
      </Section>
    </Container>
  );
}

MovieListPresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default MovieListPresenter;