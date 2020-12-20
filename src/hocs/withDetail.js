import React from 'react';

function withDetail(DetailPresenter, fetchDetail) {
  return class extends React.Component {
    state = {
      data: null,
      error: null,
      isLoading: true,
    };
  
    fetchDetail = async (id) => {
      try {
        const { data } = await fetchDetail(id);
        this.setState({ data });
      } catch {
        this.setState({ error: "Can't find anything."});
      } finally {
        this.setState({ isLoading: false });
      }
    };

    componentDidMount() {
      const { match, history } = this.props;
      const parsedId = Number.parseInt(match.params.id);
      if(Number.isNaN(parsedId)) {
        return history.push('/'); // id가 숫자가 아니면 /로 이동
      }

      this.fetchDetail(parsedId);
    }
  
    render() {
      const { data, error, isLoading } = this.state;
  
      return (
        <DetailPresenter 
          data={data}
          error={error}
          isLoading={isLoading}
        />
      );
    }
  };
}

export default withDetail;
