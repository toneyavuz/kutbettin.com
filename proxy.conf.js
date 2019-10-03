const selector = JSON.parse(process.env['npm_config_argv'])['original'][0];

const apiTarget = {
  'start': 'http://172.20.10.2:81/',
  'build': '/api',
};

const rewrite = {
  // 'start': {pathRewrite: {'^/api': ''}}
};

const modeSelector = (pathSource) => {
  return pathSource[selector];
};

const PROXY_CONFIG = [
  {
    context: [
      '/api'
    ],
    target: `${modeSelector(apiTarget)}`,
    secure: false,
    changeOrigin: true,
    logLevel: 'debug',
  }
];

PROXY_CONFIG[0] = { ...rewrite[selector], ...PROXY_CONFIG[0] };
module.exports = PROXY_CONFIG;
