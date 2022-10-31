// 公共服务
import { requestApi } from './request';

const BASE_PATH = `${window._GlobalConfig?._API_ROOT}/webapi/`;

const CommonApi = {
	// 字典表
	getDics: (params: { code: string }) =>
		requestApi<{ data: { name: string; value: string }[]; total: number }>({
			url: `${BASE_PATH}BasicData/GetDics`,
			type: 'GET',
			params
		})
};

export default CommonApi;
