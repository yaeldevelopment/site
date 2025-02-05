
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: '3b93a21e8f9f738b84f1ead29269e39f0d552cfef0e4c6ca8002f5b2f8ca31cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '09609e87f16161000c6e46fe17945328f16cb90c24bc76521fa42cda7cca8f25', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCJPSUMW.css': {size: 128883, hash: '8+jynKr5ppM', text: () => import('./assets-chunks/styles-FCJPSUMW_css.mjs').then(m => m.default)}
  },
};
