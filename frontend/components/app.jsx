import React from 'react';
import OuterComponent from "./session/outer_component";
import HomeContainer from "./home/home_container";
import Main from "./main";

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
	<div>
		<Switch>
			<ProtectedRoute path={`/main`} component={ Main }></ProtectedRoute>
			<AuthRoute exact path={`/signup`} component={ OuterComponent } />
			<AuthRoute exact path={`/login`} component={ OuterComponent } />
			<Route exact path={`/`} component={ HomeContainer } />
		</Switch>
	</div>
);
