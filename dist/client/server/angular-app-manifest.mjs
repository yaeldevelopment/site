
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '3e7c20a08743de3f9943eeaa614423b5e635ded9b7040ed9db6d3eab6aacdc5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'bb45407b98e48c56ee180f14feff264b9cbf350753dba7aef305d23530c852d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-G4UYV4UF.css': {size: 130091, hash: 'jFopf+72Dng', text: () => import('./assets-chunks/styles-G4UYV4UF_css.mjs').then(m => m.default)}
  },
};
