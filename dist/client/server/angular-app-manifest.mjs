
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '00854ccbc330eb5d66a395ddc4f52119023dcdf13277b81e8e9e28bd6686c1e9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '7c3c82bbd15e484308c3b82a5b46a1ec5613e37e26a7202199a0d50811a85111', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FYCAPQ2O.css': {size: 129153, hash: 'm6VlnTXGzrs', text: () => import('./assets-chunks/styles-FYCAPQ2O_css.mjs').then(m => m.default)}
  },
};
