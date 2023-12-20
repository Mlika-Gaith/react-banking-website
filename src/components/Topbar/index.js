import React from "react";
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopbarMenu,
  TopbarWrapper,
  TopbarLink,
  TopBtnWrap,
  TopbarRoute,
} from "./TopbarElements";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about" onClick={toggle}>
            About
          </TopbarLink>
          <TopbarLink to="discover" onClick={toggle}>
            Discover
          </TopbarLink>
          <TopbarLink to="services" onClick={toggle}>
            Services
          </TopbarLink>
          <TopbarLink to="signup" onClick={toggle}>
            Sign Up
          </TopbarLink>
        </TopbarMenu>
        <TopBtnWrap>
          <TopbarRoute to="/sign-in">Sign In</TopbarRoute>
        </TopBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
