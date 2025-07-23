
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6283, hash: '13ac1737f0dec5b5785e6977d2887f768ffa92f182ea33702c757688a95b4cf2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4315, hash: '51554f70d8f329b6aac5f18c3430062b1e521a2034c8c313477416167ae1b30b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-G64MTJTX.css': {size: 130109, hash: '7ArBXsptHG0', text: () => import('./assets-chunks/styles-G64MTJTX_css.mjs').then(m => m.default)}
  },
};
