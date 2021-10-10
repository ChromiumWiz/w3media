import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { SPitchFeedProps } from "./types";
import {
  PitchWrapper,
  PitchWrapperInn,
  FeedContainer,
  PitchName,
  PitchUser,
  PitchText,
  Avatar,
  PitchTextWrapper,
  ContentCenterCol,
  CursorPointer,
  SPitchSingleUrlParams,
} from "../../common";
import { Col } from "react-bootstrap";
import { ROUTE_P } from "../../../constants";
import {
  ArrowDownUp,
  ArrowDown,
  ArrowUp,
  Chat,
  Share,
  ThreeDotsVertical,
} from "react-bootstrap-icons";

const PitchFeed: React.FC<SPitchFeedProps> = ({
  id,
  name,
  userName,
  userAvatar,
  pitch,
  time,
  onComment,
  type,
}) => {
  const commentVal = {
    cId: id,
    cName: name,
    cUserName: userName,
    cUserAvatar: userAvatar,
    cPitch: pitch,
    cTime: time,
  };

  const [commentRoute, setCommentRoute] = useState("");
  const history = useHistory();

  useEffect(() => {
    const set = async () => {
      history.push(ROUTE_P + commentRoute);
    };
    if (commentRoute) set();
  }, [commentRoute]);

  return (
    <FeedContainer>
      <PitchWrapper>
        <PitchWrapperInn>
          <Avatar user={userName} image={userAvatar} size="sm" />
          <PitchTextWrapper>
            <PitchName to="" sm="sm">
              {name}
            </PitchName>
            <PitchUser to="" sm="sm">
              {userName}
            </PitchUser>
            <div className="clearfix"></div>
            {type !== "comment" && (
              <CursorPointer onClick={(e) => setCommentRoute(id)}>
                <PitchText>{pitch}</PitchText>
              </CursorPointer>
            )}

            {type === "comment" && <PitchText>{pitch}</PitchText>}

            {type != "comment" && (
              <PitchWrapperInn>
                <ContentCenterCol>
                  <CursorPointer>
                    <ArrowUp />
                    <ArrowDown />
                  </CursorPointer>
                </ContentCenterCol>
                <ContentCenterCol>
                  <CursorPointer>
                    {onComment ? (
                      <Chat onClick={(e) => onComment(commentVal)} />
                    ) : (
                      ""
                    )}
                  </CursorPointer>
                </ContentCenterCol>
                <ContentCenterCol>
                  <CursorPointer>
                    <Share />
                  </CursorPointer>
                </ContentCenterCol>
                <ContentCenterCol>
                  <CursorPointer>
                    <ThreeDotsVertical />
                  </CursorPointer>
                </ContentCenterCol>
              </PitchWrapperInn>
            )}
          </PitchTextWrapper>
        </PitchWrapperInn>
      </PitchWrapper>
    </FeedContainer>
  );
};

export default PitchFeed;
