import React from 'react';
import SignupFormContainer from './session/signup_form_container';

import { Route } from 'react-router-dom';

export default () => (
	<div>
		<Route path={`/signup`} component={`SignupFormContainer`} />
	</div>
);
