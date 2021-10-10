import React from "react";
import { SAvatarProps } from "./types";
import { AvatarWrapper, AvatarImage } from "./styles";

const Avatar: React.FC<SAvatarProps> = ({ user, image, size }) => {
  if (size == "sm") {
    return (<AvatarWrapper sm="sm" >
      <AvatarImage src={image}/>
    </AvatarWrapper>);
  } else if (size == "lg") {
    return (<AvatarWrapper lg="lg">
      <AvatarImage src={image}/>
    </AvatarWrapper>);
  }
  else{
    return (<AvatarWrapper md="md">
      <AvatarImage src={image}/>
    </AvatarWrapper>);
  }
};

export default Avatar;
