import styled from "styled-components";
import { Image } from "react-bootstrap";
import { SAvatarSizeProps } from "./types";

export const AvatarWrapper = styled.div`
  dispaly: block;

  ${(p: SAvatarSizeProps) =>
    p.sm
      ? `width: 50px;
  height: 50px;`
      : ``}
  ${(p: SAvatarSizeProps) =>
    p.md
      ? `width: 60px;
  height: 60px;`
      : ``}

      ${(p: SAvatarSizeProps) =>
        p.lg
          ? `width: 100px;
      height: 100px;`
          : ``}
  border-radius: 50%;
  background-color: #888;
  overflow:hidden;
`;

export const AvatarImage = styled(Image)`
  width: 100%;
`;
