import { SNavMain } from "../components/common";

export const ROUTE_HOME = "/";
export const ROUTE_LOGIN = "/login";
export const ROUTE_PROFILE = "/profile";
export const ROUTE_SIGNUP = "/signup";
export const ROUTE_P = "/pitch/";
export const ROUTE_PITCH = ROUTE_P + ":pitchId";

export const NAV_DATA: SNavMain = {
  home: { name: "Home", link: ROUTE_HOME },
  login: { name: "Login", link: ROUTE_LOGIN },
  signup: { name: "Signup", link: ROUTE_SIGNUP },
  profile: { name: "Profile", link: ROUTE_PROFILE },
};
