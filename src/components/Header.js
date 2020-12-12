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
          <StyledLink href="/">Movies</StyledLink>
        </Item>
        <Item>
          <StyledLink href="/tv">TV</StyledLink>
        </Item>
        <Item>
          <StyledLink href="/search">Search</StyledLink>
        </Item>
      </List>
    </Header>
  );
}
