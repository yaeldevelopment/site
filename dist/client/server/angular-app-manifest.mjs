
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: 'dbc5b9d53b725a7b6c11690fc861a20639c1439dcc6bcd89b5d152be99e4aa84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'c7a89ae9ad8b552309cee86b4d63aca57a1d0ae56e92788c949390a0f965b767', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-P3B52EQO.css': {size: 128831, hash: 'GPZhKxd+F0g', text: () => import('./assets-chunks/styles-P3B52EQO_css.mjs').then(m => m.default)}
  },
};
