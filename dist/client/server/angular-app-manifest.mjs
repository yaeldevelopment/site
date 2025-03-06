
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '8670270ca36d72f4978780fbc95d92a92573a86262bae08f3c43a4dc37afc613', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '6c5442e929b62b59a92856a7aabf97892ba9a5f53b6a8a362ddd73a7b0e63a2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Z2M7PZPZ.css': {size: 129348, hash: 'Ek8D2bzDNH8', text: () => import('./assets-chunks/styles-Z2M7PZPZ_css.mjs').then(m => m.default)}
  },
};
