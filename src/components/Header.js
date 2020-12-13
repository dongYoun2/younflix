import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
  border-bottom: 3px solid ${props => props.current ? '#3498db' : 'transparent'};
  transition: border-bottom 0.3s ease-in-out;
  /* border-bottom-width: 3px; */
  /* border-bottom-style: solid; */
  /* border-bottom-color: ${props => props.current ? '#3498db' : 'transparent'}; */
  /* transition: border-bottom-color 0.3s ease-in-out; */
`

const StyledLink = styled(Link)`
  /* border: 1px solid green; */
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Header({ location: { pathname } }) {
  return (
    <StyledHeader>
      <List>
        <Item current={pathname === '/'}>
          <StyledLink to="/">Movies</StyledLink>
        </Item>
        <Item current={pathname === '/tv'}>
          <StyledLink to="/tv">TV</StyledLink>
        </Item>
        <Item current={pathname === '/search'}>
          <StyledLink to="/search">Search</StyledLink>
        </Item>
      </List>
    </StyledHeader>
  );
}

export default withRouter(Header);