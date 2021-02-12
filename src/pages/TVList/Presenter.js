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
function TVListPresenter({ topRated, popular, airingToday, isLoading, error }) {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Message color="#e74c3c" text={error} />;
  }

  // no error === topRated, popular, airingToday all are array
  return (
    <Container>
      <Section title="Top Rated Shows">
        {topRated?.length > 0 &&
          topRated.map((show) => (
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
      <Section title="Popular Shows">
        {popular?.length > 0 &&
          popular.map((show) => (
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
      <Section title="Airing Today">
        {airingToday?.length > 0 &&
          airingToday.map((show) => (
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

export default withTitle(TVListPresenter, "TV Shows");
