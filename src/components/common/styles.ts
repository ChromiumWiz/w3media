import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SPitchNameProps, SPitchUserProps, SFloatProps } from "./types";
import { Button, ButtonProps, ButtonGroup } from "react-bootstrap";

export const MainContainer = styled(Container)`
  &&& {
    min-height: 100vh;
    padding-top: 70px;
  }
`;

export const MainRow = styled(Row)`
  dispaly: flex;
  flex-grow: row;
`;

export const CenterCol = styled(Col)`
  background-color: #fff;
  max-width: 600px;
`;

export const LeftCol = styled(Col)`
  width: auto;
`;

export const RightCol = styled(Col)`
  width: 40%;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const MainCol = styled(Col)`
  min-width: 60% !important;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const PitchTextWrapper = styled.div`
  width: calc(100% - 50px);
  margin-left: 10px;
`;
export const PitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 30px;
`;

export const PitchWrapperInn = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  align-items: top;
  height: auto;
  position: relative;
`;

export const PitchWrapperNoflex = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;
export const PitchTextarea = styled(FormControl)`
  resize: none;
  height: 100px;
  border: none;
  width: calc(100% - 70px);
  margin-left: 10px;

  :focus-visible {
    outline: -webkit-focus-ring-color auto 0px;
    border: none !important;
  }
`;

export const PitchLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 3px;
  :hover,
  :focus {
    text-decoration: none;
  }
`;

export const PitchName = styled(PitchLink)`
  float: left;
  ${(p: SPitchNameProps) => (p.md ? `font-size: 18px; ` : ``)}
  ${(p: SPitchNameProps) => (p.sm ? `font-size: 16px;` : ``)}
  
  font-weight: 600;
  color: #000;
`;

export const PitchUser = styled(PitchLink)`
  float: left;
  ${(p: SPitchUserProps) => (p.md ? `font-size: 16px;` : ``)}
  ${(p: SPitchUserProps) => (p.sm ? `font-size: 14px;` : ``)}
  font-size: 14px;
  color: #7a7a7a;
`;

export const PitchText = styled("p")`
  font-size: 16px;
  text-align: left;
`;

export const ContentCenterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const CursorPointer = styled("span")`
  display: block;
  cursor: pointer;
  border: none;
  padding: 0px !important;
  margin: 0 !important;
  ${(p: SFloatProps) => (p.left ? "float:left;" : "")}
  ${(p: SFloatProps) => (p.right ? "float:right;" : "")}
`;

export const ModalCont = styled("div")`
  display: block;
  text-align: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;

export const Overlay = styled("div")`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

export const ModalCustom = styled("div")`
  display: inline-block;
  float: none;
  width: auto;
  max-width: 600px;
  height: auto;
  padding: 15px;
  position: relative;
  margin-top: 70px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  z-index: 100;
`;
