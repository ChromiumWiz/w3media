import styled from "styled-components";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SNav = styled(Nav)`
  height: 60px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: left;
  align-content: center;
  padding: 0px 15px 0px 15px;
  background-color: #fff;
  box-shadow: 0px 0px 15px 1px #888;
  z-index:99;
`;

export const SNavItem = styled(NavItem)`
  height: auto;
  width: auto;
  cursor: pointer;
  line-height: 30px;
`;

export const SNavLink = styled(NavLink)`
  &&& {
    display: flex !important;
    flex-direction: row;
    text-decoration: none;
    padding: 5px;

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
  height: 20px;
  display: block;
  padding: 0px 5px;
  text-decoration: none;
  float: none;
  color: #1a8cd8;
  font-weight: 600;
`;
