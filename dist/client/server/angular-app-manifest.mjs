
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5855, hash: 'ac9ecbeff728fc26f5b87d66c82ee5d0e3991feb0fcaf2418bc83ba961d215ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '4d6e64fa06705b913998dcf1705d585bdf261670c4eecafa076da8f27abae6be', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-27JAP5IM.css': {size: 129294, hash: 'bq14ZoSZhRs', text: () => import('./assets-chunks/styles-27JAP5IM_css.mjs').then(m => m.default)}
  },
};
