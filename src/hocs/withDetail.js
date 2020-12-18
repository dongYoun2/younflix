import React from 'react';

function withDetail(DetailPresenter, getDetail) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
        error: null,
        loading: true,
      };
    }
  
    async componentDidMount() {
      const { match, history } = this.props;
      const parsedId = Number.parseInt(match.params.id);
      if(Number.isNaN(parsedId)) {
        return history.push('/'); // id가 숫자가 아니면 /로 이동
      }

      try {
        const { data } = await getDetail(parsedId);
        this.setState({ data });
      } catch {
        this.setState({ error: "Can't find anything."});
      } finally {
        this.setState({ loading: false });
      }
    }
  
    render() {
      const { data, error, loading } = this.state;
  
      return (
        <DetailPresenter 
          data={data}
          error={error}
          loading={loading}
        />
      );
    }
  };
}

export default withDetail;
