
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5753, hash: '3909a7523b6d03b61a6014f993ec9f3fca6c0a5d17cc0e96ce5aec25d039aa60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '6b45d6bb0e88712b8dae0e0a96dca7c39aa860577c8d4d1d8d4adbe19704e363', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-RDOBM6CR.css': {size: 129107, hash: 'hkpwe4JULiQ', text: () => import('./assets-chunks/styles-RDOBM6CR_css.mjs').then(m => m.default)}
  },
};
