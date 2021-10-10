import React from "react";
// import Dropdown  from "react-bootstrap/Dropdown";
import { Link, useHistory } from "react-router-dom";
// import { isEmpty } from 'lodash';

import { SNavProps, SNavBarItem, SNavBarItemSub } from "./types";

import { SNav, SNavItem, SNavLink, SNavText, NLink } from "./styles";
import { NavButton, SButtonGroup, LoginButton, SignupButton } from "../button";
import { HouseFill } from "react-bootstrap-icons";

const Navbar: React.FC<SNavProps> = ({ navData }) => {
  const history = useHistory();

  const handleNav = (link: string): void => {
    history.push(link);
  };

  return (
    <>
      <SNav>
        <SNavItem>
          <SNavLink>
            <NLink to={navData.home.link}>
              <NavButton>
                <HouseFill size="20" />
              </NavButton>
            </NLink>
          </SNavLink>
        </SNavItem>

        <SNavItem>
          <SNavLink>
            {/* <NLink to={navData.login.link}>
              <NavButton>
                <SNavText>{navData.login.name}</SNavText>
              </NavButton>
            </NLink> */}
          </SNavLink>
        </SNavItem>
        {/* 
        <SNavItem>
          <SNavLink>
            <NLink to={navData.profile.link}>
              <NavButton>
                <SNavText>{navData.profile.name}</SNavText>
              </NavButton>
            </NLink>
          </SNavLink>
        </SNavItem> */}
        <SButtonGroup>
          <LoginButton>Login</LoginButton>
          <SignupButton>Signup</SignupButton>
        </SButtonGroup>
      </SNav>
    </>
  );
};

export default Navbar;
