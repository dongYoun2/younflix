import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "components/Loader";
import Section from "components/Section";
import Message from "components/Message";
import Poster from "components/Poster";
import withTitle from "HOCs/withTitle";

const Container = styled.div`
  padding: 30px;
`;
function MovieListPresenter({
  nowPlaying,
  upcoming,
  popular,
  error,
  isLoading,
}) {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  // no error === nowPlaying, upcoming, popular all are array
  return (
    <Container>
      <Section title="Now Playing">
        {nowPlaying?.length > 0 &&
          nowPlaying.map((movie) => (
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
      <Section title="Upcoming Movies">
        {upcoming?.length > 0 &&
          upcoming.map((movie) => (
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
      <Section title="Popular Movies">
        {popular?.length > 0 &&
          popular.map((movie) => (
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

export default withTitle(MovieListPresenter, "Movies");
