import React, { useState, useEffect } from "react";
import { SCommentProps } from "./types";
import {
  ModalCont,
  Overlay,
  ModalCustom,
  PitchFeed,
  Pitch,
  CursorPointer,
} from "../../common";
import { X } from "react-bootstrap-icons";

const Comment: React.FC<SCommentProps> = ({
  cId,
  cName,
  cUserName,
  cPitch,
  cTime,
  cUserAvatar,
  cOverlayHide,
}) => {
  return (
    <>
      <ModalCont>
        {cOverlayHide ? (
          <Overlay onClick={(e) => cOverlayHide(undefined)}></Overlay>
        ) : (
          ""
        )}
        <ModalCustom>
          {cOverlayHide ? (
            <CursorPointer left="left">
              <X onClick={(e) => cOverlayHide(undefined)} size="26" />
            </CursorPointer>
          ) : (
            ""
          )}
          <div className="clearfix"></div>
          <PitchFeed
            id={cId}
            name={cName}
            userName={cUserName}
            userAvatar={cUserAvatar}
            pitch={cPitch}
            time={cTime}
            type="comment"
          />
          <div className="clearfix"></div>
          {cUserAvatar ? (
            <Pitch placeholder="Pitch your comment" userAvatar={cUserAvatar} />
          ) : (
            ""
          )}
        </ModalCustom>
      </ModalCont>
    </>
  );
};
export default Comment;
