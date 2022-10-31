import React, { useEffect } from 'react';
import router from './router';
import { RouterProvider } from 'react-router-dom';

interface RouterProps {
	[key: string]: any;
	token?: string;
}

const RouterConfig = (props: RouterProps) => {
	const { token = '' } = props;

	useEffect(() => {
		console.log('token-----', token);
	}, []);

	return <RouterProvider router={router} />;
};

export default RouterConfig;
