import React, { useEffect, useState, useCallback } from "react";
import { SFeedprops } from "./types";
import {
  PitchFeed,
  SPitchFeedProps,
  SCommentProps,
  Comment,
} from "../../common";
import { isEmpty } from "lodash";

const Feed: React.FC<SFeedprops> = ({ type, feedData }) => {
  const [pitchData, setPitchData] = useState<SPitchFeedProps[]>([]);
  const [isComment, setIsComment] = useState<SCommentProps>();
  const [commentData, setCommentData] = useState<SCommentProps>();

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
      {pitchData.map((val: SPitchFeedProps, i: Number) => {
        return (
          <PitchFeed
            id={val.id}
            name={val.name}
            userName={val.userName}
            time={val.time}
            pitch={val.pitch}
            userAvatar={val.userAvatar}
            onComment={setIsComment}
          />
        );
      })}

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

export default Feed;
