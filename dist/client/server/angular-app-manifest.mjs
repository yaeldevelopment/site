
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: 'c286cc4face7f6c2220d80cc0dbbceb181128c0cc82d61a8b71e67db983eff84', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '5dc721b40eb18561b5b1eb4c6d741cac71615895eb6233d3fc786d064ba023e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCJPSUMW.css': {size: 128883, hash: '8+jynKr5ppM', text: () => import('./assets-chunks/styles-FCJPSUMW_css.mjs').then(m => m.default)}
  },
};
