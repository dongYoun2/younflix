import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import withTitle from "HOCs/withTitle";
import noPosterImage from "assets/noPosterSmall.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const BackDrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const InfoContainer = styled.div`
  margin: 20px 0;
`;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

function Detail({ data }) {
  const title = data.original_title ? data.original_title : data.original_name;
  const release_date = data.release_date
    ? data.release_date.substring(0, 4)
    : data.first_air_date.substring(0, 4);
  const runtime = data.runtime ? data.runtime : data.episode_run_time[0];
  const HeadTitle = withTitle(null, title);

  return (
    <>
      <HeadTitle />
      <Container>
        <BackDrop
          bgUrl={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        />
        <Content>
          <Cover
            bgUrl={
              data.poster_path
                ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                : noPosterImage
            }
          />
          <Data>
            <Title>{title}</Title>
            <InfoContainer>
              <span>{release_date}</span>
              <Divider>•</Divider>
              <span>{runtime} min</span>
              <Divider>•</Divider>
              <span>
                {data?.genres
                  .map((genre) => genre.name)
                  .reduce((acc, cur) => [acc, " / ", cur])}
              </span>
            </InfoContainer>
            <Overview>{data.overview}</Overview>
          </Data>
        </Content>
      </Container>
    </>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
};

export default Detail;
