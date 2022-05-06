import { defineConfig } from 'umi';
import pkg from '../package.json';
import constants, {config} from '../src/utils/config';
import defaultSettings from './defaultSettings';
import routes from './routes';

// 是否开发模式
const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
// CDN地址
const CDN_PREFIX = 'https://smart-cdn.gtdreamlife.com';
// oss文件上传地址
const UPLOAD_PREFIX = 'https://smartscripts.oss-cn-beijing.aliyuncs.com';
// 文件访问路径
const UPLOAD_PATH = `/${config.title}/${process.env.API_ENV}/${pkg.version}`;

export default defineConfig({
  // build产物是否加hash后缀
  hash: true,
  // 默认开启antd
  antd: {},
  // 默认开启dva
  dva: {
    hmr: true,
  },
  // 路由模式
  history: {
    type: 'browser',
  },
  // 国际化
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  // node_modules下的文件编译方式
  nodeModulesTransform: {
    type: 'none',
  },
  // 按需加载
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  // 浏览器版本兼容，引入polyfill
  targets: {
    ie: 11,
  },
  // 路由
  routes,
  // 配置主题
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // 浏览器标题，可自定义
  title: false,
  // 忽略moment的locale文件
  ignoreMomentLocale: true,
  // manifest产物
  manifest: {
    basePath: '/',
  },
  // 快速刷新
  fastRefresh: {},
  // 编译压缩器
  esbuild: {},
  // 不置入打包
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  // 额外在header中引入的脚本
  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
        ],
  // 嵌入的环境变量
  define: {
    'process.env': {},
    'process.env.API_ENV': process.env.API_ENV || 'dev',
    'process.env.config': constants[process.env.API_ENV || 'dev'],
  },
  // 访问静态资源的路径
  publicPath: IS_DEV ? '/' : `${CDN_PREFIX}${UPLOAD_PATH}/`,
  // 非根域名部署的二级路径名称
  base: `/${config.title}/`,
  // build过程会把本地文件上传到oss服务器，路径为项目名称/package.json中的版本号
  alioss: {
    ossConfig: {
      region: 'oss-cn-beijing',
      accessKeyId: 'LTAIr2AktonLa8eY',
      accessKeySecret: '3TTlWqoCyZ1WxICnVjaQyq91HALY1O',
      bucket: 'smartscripts',
      secure: true,
    },
    configName: '.alioss',
    enabled: !IS_DEV,
    cdnPrefix: `${UPLOAD_PREFIX}/`,
    uploadPath: UPLOAD_PATH,
    exclude: '',
    ignoreHtml: true,
  },
});
