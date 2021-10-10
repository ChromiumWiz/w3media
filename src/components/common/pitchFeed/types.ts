import { SCommentProps } from "../../common";

export interface SPitchFeedProps {
  id: string;
  userName: string;
  name: string;
  userAvatar: string;
  time: string;
  pitch: string;
  onComment?: (value: SCommentProps) => void;
  share?: Function;
  up?: Function;
  type?: string;
}
