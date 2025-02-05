
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: '9c373f229da2c40b91a841f47a0d10ee01d0f9621e26acb14173fa088a0d0c7d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '34c2b807c9b803412411364d7f584870e95629f8881ff0427825f7788ff805ee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FCJPSUMW.css': {size: 128883, hash: '8+jynKr5ppM', text: () => import('./assets-chunks/styles-FCJPSUMW_css.mjs').then(m => m.default)}
  },
};
