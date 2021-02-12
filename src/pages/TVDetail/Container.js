import TVDetailPresenter from "./Presenter";
import PropTypes from "prop-types";
import { tvApi } from "api";
import withDetail from "HOCs/withDetail";

function TVDetailContainer({ data, error, isLoading }) {
  return <TVDetailPresenter tvs={data} error={error} isLoading={isLoading} />;
}

TVDetailContainer.propTypes = {
  data: PropTypes.object,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
};

export default withDetail(TVDetailContainer, (id) => tvApi.fetchShowDetail(id));
