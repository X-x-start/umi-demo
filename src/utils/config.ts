const config = {
  title: 'umi-web-demo'
}

type EnvConfig = {
  [key: string]: {
    BASE_API: string;
    PUBLIC_PATH: string;
  };
};

const PUBLIC_PATH = `/${config}/`

const envConfig: EnvConfig = {
  local: {
    BASE_API: 'http://localhost:7001',
    PUBLIC_PATH
  },
  dev: {
    BASE_API: 'https://smart-dev.gtdreamlife.com/ecenter-service',
    PUBLIC_PATH
  },
  uat: {
    BASE_API: 'https://smart-uat.gtdreamlife.com/ecenter-service',
    PUBLIC_PATH
  },
  prod: {
    BASE_API: 'https://smart.gtdreamlife.com/ecenter-service',
    PUBLIC_PATH
  },
  show: {
    BASE_API: 'https://smart-show.gtdreamlife.com/ecenter-service',
    PUBLIC_PATH
  },
};

export {config}

export default envConfig;
