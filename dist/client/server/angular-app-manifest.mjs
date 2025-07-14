
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3748, hash: '5b1726f345687ffe64198b17477584b77b4c84237c54a6142148483d4bf52496', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4288, hash: '7174be0e1e1bded29e7074781c0e1445fcec421a30c6805dc11d0680b4a8bdd0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
