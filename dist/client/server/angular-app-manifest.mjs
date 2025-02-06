
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5810, hash: 'bf9b0c3152f4707e99b6f0eb389ec6f433800c38f0ded8a2f317235bf5138cd2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '2692271d0ba499134aae6e42197dd3391657d9d52479268553b693513fa15a48', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CQVGFLG6.css': {size: 129138, hash: '6+ShoQdRdbg', text: () => import('./assets-chunks/styles-CQVGFLG6_css.mjs').then(m => m.default)}
  },
};
