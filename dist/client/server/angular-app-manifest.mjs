
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: '6e80c486b4b666df4171aa4b0461f9c5b652dc3ddd01c6021668cb17cc19c408', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '5e2aa0f99f8a66dfb31f6631a6c8a4d35678feeb2f5d487d1b21b299111219ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-62BHHV6P.css': {size: 129018, hash: 'P5JaC4ruSLE', text: () => import('./assets-chunks/styles-62BHHV6P_css.mjs').then(m => m.default)}
  },
};
