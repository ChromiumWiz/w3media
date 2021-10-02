import styled from "styled-components";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SNav = styled(Nav)`
  height: 30px;
  display: flex;
  position: fixed;
  top: 15px;
  left: 0px;
  flex-direction: row;
  padding: 10px 15px 10px 15px;
  flex-grow: 1;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const SNavItem = styled(NavItem)`
  height: 30px;
  width: auto;
  cursor: pointer;
  line-height: 30px;
`;

export const SNavLink = styled(NavLink)`
  &&& {
    display: flex !important;
    flex-direction: row;
    text-decoration: none;

    hover,
    focus,
    active {
      text-decoration: none;
    }
  }
`;

export const NLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-grow: row;
  hover,
  focus,
  active {
    text-decoration: none;
  }
`;

export const SNavText = styled.div`
  width: auto;
  height: 30px;
  display: block;
  padding: 0px 5px;
  line-height: 30px;
  font-size: 14px;
  text-decoration: none;
  float: none;
  color: #1a8cd8;
  font-weight: 600;
`;
