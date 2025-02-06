
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: '18fb55c4a69485db7267f63004cd5a527e9220c3c1b2bacba7adf9c240cbd276', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'a84e7c7a132d32df2118bc0710139d216265bc21d4de9387a4951e0de1b9f4fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6N5CBCI4.css': {size: 129018, hash: 'OtcfrkN90Qk', text: () => import('./assets-chunks/styles-6N5CBCI4_css.mjs').then(m => m.default)}
  },
};
