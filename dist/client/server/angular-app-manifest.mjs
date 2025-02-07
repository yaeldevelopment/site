
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '710c2446fd5a106c05c911a94028af7dd1d7f04c8e05aa36f332da04a7f55c9c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '3f4db4b954596ccebc222a97f0d57871fcf66b11c75775f0fb07df6b64c66e88', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FYCAPQ2O.css': {size: 129153, hash: 'm6VlnTXGzrs', text: () => import('./assets-chunks/styles-FYCAPQ2O_css.mjs').then(m => m.default)}
  },
};
