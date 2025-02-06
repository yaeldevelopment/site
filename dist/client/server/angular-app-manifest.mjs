
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: 'fa3c9325ddef76e689b5b262d640f0b543d07cc55d7ea257ed943ad0ffe86023', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'ea2c6471d44bffe862a34b3a31a6f430f4684ba8dfea15c898bd3cafec149205', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-IHPTL6U2.css': {size: 128943, hash: 'j7D1Ig2vMdY', text: () => import('./assets-chunks/styles-IHPTL6U2_css.mjs').then(m => m.default)}
  },
};
