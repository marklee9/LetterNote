import React from 'react';
import SignupFromContainer from './session/signup_form_container';

import { Route } from 'react-router-dom';

export default () => (
	<div>
		<Route />
		<Route />
		<Route path={`/signup`} component={`SignupFormContainer`}/>
	</div>
);
