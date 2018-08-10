import React from 'react';
import OuterComponent from "./session/outer_component";
import HomeContainer from "./home/home_container";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

export default () => (
	<div>
		<AuthRoute exact path={`/signup`} component={ OuterComponent } />
		<AuthRoute exact path={`/login`} component={ OuterComponent } />
		<Route exact path={`/`} component={ HomeContainer } />
	</div>
);
