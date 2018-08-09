import React from 'react';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from './session/login_form_container';
import HomeContainer from "./home/home_container";

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

export default () => (
	<div>
		<AuthRoute exact path={`/signup`} component={SignupFormContainer} />
		<AuthRoute exact path={`/login`} component={LoginFormContainer} />
		<Route exact path={`/`} component={HomeContainer} />
	</div>
);
