
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: 'df77499e58ff589f48d724cce99796d2607a3ec5fd13fbd575a702f1d06ecde7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'f5b15ad29d0b35fa1b591321c4040c645557755a7881077e8873b4a89d451f5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3PALBGGO.css': {size: 129348, hash: 'b8I3+XUgrvM', text: () => import('./assets-chunks/styles-3PALBGGO_css.mjs').then(m => m.default)}
  },
};
