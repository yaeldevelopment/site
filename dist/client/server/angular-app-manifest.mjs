
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '9aa6c4ca1aaaf09e3e7ff83f464d6ef85711ec43cb2c7c8eda1eb0b094f41ccb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '1f6985e47ffd1796357feb3fea5e7df76d5f3dd72a35a1886b0afe7b420d0b11', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-W22ZBBX4.css': {size: 129346, hash: 'BJ9EBya/vQ8', text: () => import('./assets-chunks/styles-W22ZBBX4_css.mjs').then(m => m.default)}
  },
};
