
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 5738, hash: 'e9d167f8b5f90ca6e437c340e233f99cc35f5a26d3aea73ecb2e3e77f4dad211', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3865, hash: 'bae357b9e9e5f366843c5dbdb805d45d3b66ece108d75a4bf6b9e3ad2b041fe2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-H3E56AAC.css': {size: 128986, hash: 'WAdzXTiM4bk', text: () => import('./assets-chunks/styles-H3E56AAC_css.mjs').then(m => m.default)}
  },
};
