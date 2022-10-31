const TOKEN_KEY = 'APP_TOKEN';

// 获取token
export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY) || null;
};

// 设置token
export const setToken = (token: string) => {
	localStorage.setItem(TOKEN_KEY, token);
};

// 删除token
export const removeToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};
