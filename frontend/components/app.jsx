import React from 'react';
import OuterContainer from "./session/outer_form";
import HomeContainer from "./home/home_container";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

export default () => (
	<div>
		<AuthRoute exact path={`/signup`} component={OuterContainer} />
		<AuthRoute exact path={`/login`} component={OuterContainer} />
		<Route exact path={`/`} component={HomeContainer} />
	</div>
);
