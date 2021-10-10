import React from "react";
import {
  PitchTextarea,
  PitchWrapper,
  PitchWrapperInn,
  PitchWrapperNoflex,
} from "../../common";
import { Avatar, PrimaryButton } from "../../common";
import { SPitchProps } from "./types";

const Pitch: React.FC<SPitchProps> = ({ title, placeholder, userAvatar }) => {
  return (
    <PitchWrapper>
      <PitchWrapperInn>
        <Avatar user="aa" size="md" image={userAvatar}/>
        <PitchTextarea as="textarea" placeholder={placeholder}></PitchTextarea>
      </PitchWrapperInn>
      <PitchWrapperInn>
        <PitchWrapperNoflex>
          <PrimaryButton float="right">Pitch</PrimaryButton>
        </PitchWrapperNoflex>
      </PitchWrapperInn>
    </PitchWrapper>
  );
};

export default Pitch;
