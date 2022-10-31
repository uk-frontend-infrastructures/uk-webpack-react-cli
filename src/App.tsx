import React, { useEffect, useState } from 'react';
import './App.css';
import '@/styles/common.less';
import { getToken } from './tools/localstorage';
import { RecoilRoot } from 'recoil';
import RouterConfig from './routes';

function App() {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(1);
	}, []);

	useEffect(() => {
		console.log('count------', count);
		console.log('config------', window._GlobalConfig);
	}, [count]);

	return (
		<div className='App'>
			<RecoilRoot>
				<RouterConfig token={getToken()} />
			</RecoilRoot>
		</div>
	);
}

export default App;
