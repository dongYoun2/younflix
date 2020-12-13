import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  /* border: 1px solid red; */
  color: #fdfdfd;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(47, 47, 47, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`

const List = styled.ul`
  /* border: 1px solid blue; */
  display: flex;
`

const Item = styled.li`
  /* border: 1px solid yellow; */
  width: 80px;
  height: 50px;
  text-align: center;
`

const StyledLink = styled(Link)`
  /* border: 1px solid green; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Header() {
  return (
    <StyledHeader>
      <List>
        <Item>
          <StyledLink to="/">Movies</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/tv">TV</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/search">Search</StyledLink>
        </Item>
      </List>
    </StyledHeader>
  );
}

export default Header;