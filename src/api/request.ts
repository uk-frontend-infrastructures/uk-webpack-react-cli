import { getToken, setToken } from '@/tools/localstorage';
import { spliceQueryParams } from '@/tools/index';

// 请求服务
export const requestApi = async <T>(props: RequestProps): Promise<ResponseResult<T>> => {
	const { url, type = 'GET', data, headerConfig = {}, params = {}, withToken = true, file = false } = props;
	try {
		const headers: HeaderProps = { 'content-type': 'application/json', ...headerConfig };
		if (withToken) {
			const token = getToken();
			headers.Authorization = 'Bearer ' + token;
		}
		const res = await fetch(encodeURI(spliceQueryParams(url, params)), {
			method: type || (data ? ApiRequestType.POST : ApiRequestType.GET),
			headers,
			body: file ? data : JSON.stringify(data)
		});

		const response: ResponseResult<T> = await res.json();
		if (response.newToken) {
			setToken(response.newToken);
		}
		if (response.state) {
			return response;
		} else {
			const error: RequestError = {
				...response,
				code: response.status,
				message: response.title
			};
			throw error;
		}
	} catch (e) {
		return Promise.reject(e);
	}
};
