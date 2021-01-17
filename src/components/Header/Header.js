import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  z-index: 10;
  @media screen and (min-width: 680px) {
    margin-top: 30px;
  }
`;

const Inner = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  max-width: 62em;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: #050505;
  text-transform: uppercase;
  text-decoration: none;
  width: 4%;
  height: 4%;
`;

const NavLink = styled(Link)`
  color: #4b4c4b;
  margin-left: 20px;
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  @media screen and (min-width: 375px) {
    font-size: 16px;
  }
`;

NavLink.defaultProps = {
  activeStyle: {
    borderBottom: '1px solid #4b4c4b',
  },
};

const Header = () => (
  <HeaderWrapper>
    <Inner>
      
      <Logo to="/"><img src='https://ratankaliani.com/logo.png' alt="logo"></img></Logo>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/about">About</NavLink> */}
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink><a href="https://drive.google.com/file/d/1JKvAk40H614L-QddBGQKjYzMfPV2Btvg/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></NavLink>
      </nav>
    </Inner>
  </HeaderWrapper>
);

export default Header;
