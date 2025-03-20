
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5833, hash: '5946c1ec5485922dd3eb89c70e9289dda43d6336874dd5b1f0f9fda41536584e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: '966daaae4734318575457e1bf42df005d4bb28341ebcb38554367d8dbefdb8ce', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3PALBGGO.css': {size: 129348, hash: 'b8I3+XUgrvM', text: () => import('./assets-chunks/styles-3PALBGGO_css.mjs').then(m => m.default)}
  },
};
