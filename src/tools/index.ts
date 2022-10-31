/**
 * 拼接请求地址与地址栏参数
 * @param url
 * @param params
 * @returns
 */
export const spliceQueryParams = (url: string, params: any) => {
	const tempParams: any = [];
	if (Object.keys(params).length <= 0) return url;

	for (const key in params) {
		params[key] !== '' && params[key] !== undefined && params[key] !== null && tempParams.push(`${key}=${params[key]}`);
	}
	if (tempParams.length) {
		return url + '?' + tempParams.join('&');
	} else {
		return url;
	}
};
