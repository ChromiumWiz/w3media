import React from "react";
import {
  MainContainer,
  MainRow,
  RightCol,
  MainCol,
  Feed,
  Avatar,
  Cover,
  PitchName,
  PitchUser
} from "../../common";

import {ProfileAvatar} from "./styles";
import {PITCH_INFO} from "../../../constants";

const Profile: React.FC = () => {
  return (
      <MainContainer>
          <MainRow>
              <MainCol>
                  <Cover image="https://covermaker.net/wp-content/uploads/2021/01/twitter-Cover-Maker.jpg"/>
                  <ProfileAvatar>
                      <Avatar user="aaa" size="lg" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
                  </ProfileAvatar>
                  <div className="clearfix"></div>
                  <PitchName  md="md" to="aa">Lahiru Senavirathne</PitchName>
                  <div className="clearfix"></div>
                  <PitchUser md="md" to="aa">@lahiru</PitchUser>
                  <div className="clearfix"></div>
                  <Feed type="recent" feedData={PITCH_INFO}/>
              </MainCol>
              <RightCol></RightCol>
          </MainRow>
      </MainContainer>
  );
};

export default Profile;
