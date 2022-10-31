// 请求类型
declare enum ApiRequestType {
	POST = 'POST',
	GET = 'GET',
	DELETE = 'DELETE',
	PUT = 'PUT',
	UPDATE = 'UPDATE'
}

// 请求头
interface HeaderProps {
	[key: string]: string;
}

// 请求参数
interface RequestProps {
	/** 请求地址 */
	url: string;
	/** 请求类型 */
	type?: string;
	/** 请求体 */
	data?: any;
	/** 请求头 */
	headerConfig?: HeaderProps;
	params?: object;
	/** 是否携带Token */
	withToken?: boolean;
	/** 是否上传文件 */
	file?: boolean;
}

// 响应结果
interface ResponseResult<T> {
	token: string;
	state: boolean;
	status?: number;
	code?: string;
	message?: string;
	title?: string;
	total: number;
	data: T;
	newToken?: string;
}

// 请求错误
interface RequestError {
	[key: string]: any;
	code: string | number;
	message?: string;
}
