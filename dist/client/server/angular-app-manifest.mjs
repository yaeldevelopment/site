
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: '76b0544b9a42074ed25a265d4acceb7bd7dd266937f8efc108729df63609ae60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '6dff73f3dba2743d34bb06ede40da1cf4a02b823359c51a8bcb808d95b5376a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LMSVF625.css': {size: 129002, hash: 'EwW92iZYOlo', text: () => import('./assets-chunks/styles-LMSVF625_css.mjs').then(m => m.default)}
  },
};
