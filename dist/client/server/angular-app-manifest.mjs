
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: 'e53addd04deba9a6f715b4b971227e5f621e4d43c21aa022f75131e5b399c12e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '689a5593a77868ff3d0480644f404f3418d9b3c524f876c78d834649ffd95284', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCJPSUMW.css': {size: 128883, hash: '8+jynKr5ppM', text: () => import('./assets-chunks/styles-FCJPSUMW_css.mjs').then(m => m.default)}
  },
};
