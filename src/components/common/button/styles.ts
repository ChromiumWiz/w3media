import styled from "styled-components";
import { SButtonProps } from "./types";

import { Button, ButtonProps, ButtonGroup } from "react-bootstrap";

export const RoundButton = styled(Button)`
  &&& {
    width: auto;
    border: none !important;
    box-shadow: 0px 0px 10px 1px #9a9a9a;
    // padding: 5px !important;
    line-height: 1px;
    font-size: 13px;
    padding: 0px;

    :hover,
    :focus,
    :active {
      box-shadow: 0px 0px 25px 3px #888;
    }
  }
`;

export const NavButton = styled(RoundButton)`
  &&& {
    min-width: 30px;
    height: 30px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    color: #1a8cd8 !important;
    background-color: #fff;
    :hover,
    :focus,
    :active {
      background-color: #fff !important;
    }
  }
`;

export const PrimaryButton = styled(RoundButton)`
  min-width: 40px;
  height: 40px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  padding: 10px 20px !important;
  color: #fff !important;
  background-color: #1a8cd8 !important;
  float: ${(p: SButtonProps) => p.float || "none"} !important;
`;

export const SButtonGroup = styled(ButtonGroup)`
  height: 30px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: 0px 0px 15px 1px #b0b0b0;
  line-height: 20px;
  font-size: 13px;
  overflow: hidden;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const LoginButton = styled(Button)`
  min-width: 60px;
  height: 30px;
  border: none;
  line-height: 10px;
  font-size: 13px;
  background-color: #fff;
  color: #1a8cd8 !important;
  :hover {
    text-decoration: none;
    background-color: #fff;
  }
  :active {
    background-color: #c5c5c5 !important;
  }
`;

export const SignupButton = styled(Button)`
  min-width: 60px;
  height: 30px;
  border: none;
  line-height: 10px;
  font-size: 13px;
  background-color: #1a8cd8;
  color: #fff !important;
  :hover {
    text-decoration: none;
    background-color: #1a8cd8;
  }
`;
