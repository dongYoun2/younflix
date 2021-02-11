import TVDetailPresenter from "./Presenter";
import { tvApi } from "api";
import withDetail from "HOCs/withDetail";

const TVDetailContainer = withDetail(TVDetailPresenter, (id) =>
  tvApi.fetchShowDetail(id)
);

export default TVDetailContainer;
