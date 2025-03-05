
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: 'bcd6897264e56345fcb43196e5ea6feda2f86757f07c306067c547386d2a8ca2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '9502f8d6432e2f09c7216a1d4d797ba0cdcb0c2d2ccbe7b5820e275a36b88921', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-JHBENX5W.css': {size: 129233, hash: 'jqZB+Um1lHc', text: () => import('./assets-chunks/styles-JHBENX5W_css.mjs').then(m => m.default)}
  },
};
