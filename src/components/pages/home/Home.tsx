import React from "react";
import {
  MainContainer,
  MainRow,
  RightCol,
  MainCol,
  Pitch,
  Feed,
} from "../../common";

import Row from "react-bootstrap/Row";
import { PITCH_INFO } from "../../../constants";

const Home: React.FC = () => {
  return (
    <MainContainer>
      <MainRow>
        <MainCol>
          <Pitch
            placeholder="aaa"
            userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <Feed type="recent" feedData={PITCH_INFO} />
        </MainCol>
        <RightCol></RightCol>
      </MainRow>
      {/* <Row></Row> */}
    </MainContainer>
  );
};

export default Home;
