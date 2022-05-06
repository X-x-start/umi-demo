import Cookies from 'js-cookie';
import { extend } from 'umi-request';

const vars: any = process.env.config;
const { BASE_API, BASE_AUTH_API } = vars;

const errorHandler = function (error: any) {
  return Promise.reject(error);
};

const request = extend({
  timeout: 0,
  errorHandler,
});

request.interceptors.request.use(
  (url: string, options: Record<string, any>) => {
    const token = Cookies.get('access_token');
    const username = localStorage.getItem('user');

    let parsedUrl = url;
    if (!/https?:\/\//.test(url)) {
      parsedUrl = `${BASE_API}${url}`;
    }
    if (token && !/\/api\/auth\/oauth\/token/.test(url)) {
      return {
        url: parsedUrl,
        options: {
          ...options,
          headers: {
            ...options.headers,
            username,
            Authorization: `Bearer ${token}`,
          },
        },
      };
    } else {
      return {
        url: parsedUrl,
        options,
      };
    }
  },
);

request.interceptors.response.use(async (response, options) => {
  const data = await response.clone().json();
  if (data?.status === 401
  ) {
    localStorage.clear();
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    location.href = `${(process.env.config as any).publicPath}user/login`;
  }
  return data;
});

export default request;
