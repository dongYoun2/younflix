import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Section from "components/Section";
import Message from "components/Message";
import Poster from "components/Poster";
import withTitle from "HOCs/withTitle";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 30px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

function SearchPresenter({
  movies,
  tvs,
  searchTerm,
  isLoading,
  error,
  handleTermSubmit,
  handleTermChange,
}) {
  const results = (
    <>
      <Section title="Movie Results">
        {movies?.length > 0 &&
          movies.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              imageUrl={movie.poster_path}
              title={movie.original_title}
              rating={movie.vote_average}
              year={movie.release_date?.substring(0, 4)}
              isMovie={true}
            />
          ))}
      </Section>
      <Section title="TV Show Results">
        {tvs?.length > 0 &&
          tvs.map((show) => (
            <Poster
              key={show.id}
              id={show.id}
              imageUrl={show.poster_path}
              title={show.original_name}
              rating={show.vote_average}
              year={show.first_air_date?.substring(0, 4)}
            />
          ))}
      </Section>
    </>
  );

  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  if (movies?.length === 0 && tvs?.length === 0) {
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
};

export default withTitle(SearchPresenter, "Search");
