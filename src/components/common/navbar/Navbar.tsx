import React from "react";
// import Dropdown  from "react-bootstrap/Dropdown";
import { Link, useHistory } from "react-router-dom";
// import { isEmpty } from 'lodash';

import { SNavProps, SNavBarItem, SNavBarItemSub } from "./types";

import { SNav, SNavItem, SNavLink, SNavText, NLink } from "./styles";
import { NavButton } from "../button";

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
              <NavButton></NavButton>
              <SNavText>{navData.home.name}</SNavText>
            </NLink>
          </SNavLink>
        </SNavItem>

        <SNavItem>
          <SNavLink>
            <NLink to={navData.login.link}>
              <NavButton></NavButton>
              <SNavText>{navData.login.name}</SNavText>
            </NLink>
          </SNavLink>
        </SNavItem>

        <SNavItem>
          <SNavLink>
            <Link to={navData.profile.link}>{navData.profile.name}</Link>
          </SNavLink>
        </SNavItem>
      </SNav>
    </>
  );
};

export default Navbar;
