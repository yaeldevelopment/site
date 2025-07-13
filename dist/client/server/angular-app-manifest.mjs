
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 3298, hash: 'e80dd5a5db42ca284aa5cbcd3024f64fe53eadee75942dfdec4ff91ab0e397fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3838, hash: 'e226e9549c8e5372bdcb0d01f82d48df6f7b5911c0e270f9f1e5cf35edeaae4c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
