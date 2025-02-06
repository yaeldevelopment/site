
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: 'b7a9bae7d51975c1c8d5220e2280e8acce11d3ccfbe223c63bd33e6694535cdf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '88a1009788645054ffa5e1290e1d75c779ad609e48da7ae48fbba2c4d7216fac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WLTAIEYP.css': {size: 128919, hash: 'sTf8iGehWYU', text: () => import('./assets-chunks/styles-WLTAIEYP_css.mjs').then(m => m.default)}
  },
};
