import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import { Profile } from "./profile";
import { PitchSingle } from "./pitchSingle";

import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_PROFILE,
  ROUTE_PITCH,
  PITCH_INFO,
} from "../../constants";

const Page = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTE_PROFILE}>
        {/* <Home /> */}
        <Profile />
      </Route>
      <Route exact path={ROUTE_PITCH}>
        {/* <Home /> */}
        <PitchSingle />
      </Route>
    </Switch>
  );
};

export default Page;
