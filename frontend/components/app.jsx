import React from 'react';
import OuterComponent from "./session/outer_component";
import HomeContainer from "./home/home_container";

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
	<div>
		<Switch>
			<ProtectedRoute path={`/notebooks`} component={ HomeContainer }></ProtectedRoute>
			<AuthRoute exact path={`/signup`} component={ OuterComponent } />
			<AuthRoute exact path={`/login`} component={ OuterComponent } />
			<Route exact path={`/`} component={ HomeContainer } />
		</Switch>
	</div>
);
