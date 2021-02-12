import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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

function Detail({ data }) {
  return (
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
      </Content>
    </Container>
  );
}

Detail.propTypes = {
  data: PropTypes.object,
};

export default Detail;
