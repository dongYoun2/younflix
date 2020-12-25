import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'components/Loader';
import Section from 'components/Section';
import Message from 'components/Message';

const Container = styled.div`
  padding: 0 30px;
`

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`

function SearchPresenter({ movies, tvs, searchTerm, isLoading, error, handleTermSubmit, handleTermChange }) {
  const results = (
    <>
      <Section title="Movie Results">
        {movies && movies.map(movie => <span key={movie.id}>{movie.title}</span>)}
      </Section>
      <Section title="TV Show Results">
        {tvs && tvs.map(show => <span key={show.id}>{show.name}</span>)}
      </Section>
    </>
  );

  if(error) {
    return <Message color="#e74c3c" text={error} />;
  }

  if(movies?.length === 0 && tvs?.length === 0) {
    return <Message color="#95a5a6" text="Nothing found" />;
  }

  return (
    <Container>
      <Form onSubmit={handleTermSubmit}>
        <Input
          placeholder="Search Movies or TV shows..."
          value={searchTerm}
          onChange={handleTermChange}
        />
      </Form>
      {isLoading ? <Loader /> : results}
    </Container>
  );
}

SearchPresenter.propTypes = {
  movies: PropTypes.array,
  tvs: PropTypes.array,
  searchTerm: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleTermSubmit: PropTypes.func.isRequired,
  handleTermChange: PropTypes.func.isRequired,
}

export default SearchPresenter;
