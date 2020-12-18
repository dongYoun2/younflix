import MovieDetailPresenter from './Presenter';
import { movieApi } from 'api';
import withDetail from 'HOCs/withDetail';

const MovieDetailContainer = withDetail(MovieDetailPresenter, (id) => movieApi.fetchMovieDetail(id));

export default MovieDetailContainer;
