function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('spacedesignsystem', true, /\.(svg|png|webp|jpg|jpeg|gif|woff|woff2|eot|ttf)$/));
