
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: '6b6e67feaf80c8276a37c3859d47efd3b0af5c7d4cc3db7043241c4b81289899', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '3a4303234988f862d78a7d3fc1e12ba640fc735a51314ee58e62741443c7296c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCJPSUMW.css': {size: 128883, hash: '8+jynKr5ppM', text: () => import('./assets-chunks/styles-FCJPSUMW_css.mjs').then(m => m.default)}
  },
};
