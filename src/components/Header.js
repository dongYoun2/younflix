import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const StyledLink = styled(Link)``;

export default function() {
  return (
    <Header>
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
    </Header>
  );
}
