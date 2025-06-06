
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '569f43d28c3303d37163daf78bc4e5178e33267e804d31efea4d4b7ec2365f2c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '7fcf18540d051c67d66dd2c9c25c06572007be481127522ddee36e3f05a1bfff', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W22ZBBX4.css': {size: 129346, hash: 'BJ9EBya/vQ8', text: () => import('./assets-chunks/styles-W22ZBBX4_css.mjs').then(m => m.default)}
  },
};
