import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import {
  SPitchFeedProps,
  SPitchSingleUrlParams,
  MainContainer,
  MainRow,
  RightCol,
  MainCol,
  Pitch,
  Feed,
  PitchFeed,
  SCommentProps,
  Comment,
} from "../../common";

import { PITCH_INFO, SINGLE_PITCH } from "../../../constants";

const PitchSingle: React.FC = () => {
  const { pitchId } = useParams<SPitchSingleUrlParams>();
  const [pitchData, setPitchData] = useState<SPitchFeedProps[]>([]);
  const [isComment, setIsComment] = useState<SCommentProps>();
  const [commentData, setCommentData] = useState<SCommentProps>();

  const feedData = PITCH_INFO;
  useEffect(() => {
    // setPitchData(feedData);

    const set = async () => {
      setPitchData(feedData);
    };
    if (feedData) set();
  }, [feedData]);

  useEffect(() => {
    const set = async () => {
      fetchCommentData();
    };
    if (feedData) set();
  }, [isComment]);

  const fetchCommentData = useCallback(async () => {
    try {
      console.log(isComment);
      await setCommentData(isComment);
    } catch (error) {
      alert(
        `Failed to load data, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }

    // return commentData;
  }, [isComment]);

  return (
    <>
      <MainContainer>
        <MainRow>
          <MainCol>
            <PitchFeed
              id={SINGLE_PITCH.id}
              name={SINGLE_PITCH.name}
              pitch={SINGLE_PITCH.pitch}
              time={SINGLE_PITCH.time}
              userName={SINGLE_PITCH.userName}
              userAvatar={SINGLE_PITCH.userAvatar}
              onComment={setIsComment}
              type="comment"
            />
            <Pitch
              placeholder={pitchId}
              userAvatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
            <Feed type="recent" feedData={PITCH_INFO} />
          </MainCol>
          <RightCol></RightCol>
        </MainRow>
        {/* <Row></Row> */}
      </MainContainer>

      {commentData ? (
        <Comment
          cId={commentData.cId}
          cName={commentData.cName}
          cUserName={commentData.cUserName}
          cUserAvatar={commentData.cUserAvatar}
          cPitch={commentData.cPitch}
          cTime={commentData.cTime}
          cOverlayHide={setCommentData}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PitchSingle;
