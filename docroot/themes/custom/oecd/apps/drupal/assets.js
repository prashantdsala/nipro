function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(
  require.context(
    'spacedesignsystem',
    true,
    /\.(mp4|svg|png|jpg|jpeg|webp|gif|woff|woff2|yml|yaml|twig)$/
  )
);
