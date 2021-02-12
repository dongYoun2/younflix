import MovieDetailPresenter from "./Presenter";
import PropTypes from "prop-types";
import { movieApi } from "api";
import withDetail from "HOCs/withDetail";

function MovieDetailContainer({ data, error, isLoading }) {
  return (
    <MovieDetailPresenter movies={data} error={error} isLoading={isLoading} />
  );
}

MovieDetailContainer.propTypes = {
  data: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default withDetail(MovieDetailContainer, (id) =>
  movieApi.fetchMovieDetail(id)
);
