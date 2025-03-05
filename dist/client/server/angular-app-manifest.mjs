
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: 'd910042a164b9afc0abe8e13eb18044cadcfd5d7281df25cd8209a46ec94e1e4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'a94ecc65b3ccbfb6dd681ed306ad42723cb2d882c1e54ec595f20cb56c605255', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FJARS4A3.css': {size: 129233, hash: 'p6html27Zj8', text: () => import('./assets-chunks/styles-FJARS4A3_css.mjs').then(m => m.default)}
  },
};
