import React, { useEffect } from 'react';
import './index.less';
import { Outlet } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userState } from '@/store';

import ApiObj from '@/api';

const { CommonApi } = ApiObj;
const { getDics } = CommonApi;

const HelloWorld = () => {
	const user = useRecoilValue(userState);

	useEffect(() => {
		getDics({ code: 'test' }).then(res => {
			console.log('res=========', res);
		});
	}, []);
	return (
		<div className='hello-world'>
			<h1>Hello {user.name} ! This is your React App</h1>
			<div>
				<img src={`${window._GlobalConfig._ROOT_URL}/assets/images/logo.png`} />+<div className='webpack-bg'></div>
			</div>
			<Outlet />
		</div>
	);
};

export default HelloWorld;
