
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '3a886491e0c07b4f14efa898f6611c18995f95901e1a82edab8fde87b90333b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '08a52cefcb6b9c58721d11548aca9f5c3b6aad8d25d0691391f5f293fc70ca8a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-NH7JPXAI.css': {size: 130110, hash: 'MqRZ4S7IfG4', text: () => import('./assets-chunks/styles-NH7JPXAI_css.mjs').then(m => m.default)}
  },
};
