import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { imageCache, googleFontsCache, pageCache, staticResourceCache } from 'workbox-recipes';

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);
imageCache();
// googleFontsCache();
// pageCache();
staticResourceCache();

registerRoute(
  ({ url }) => url.origin === 'https://cdnjs.cloudflare.com',
  new StaleWhileRevalidate({ cacheName: 'cdn-api-responses' })
);

registerRoute(
  ({ url }) => url.origin === 'https://www.googletagmanager.com',
  new StaleWhileRevalidate({ cacheName: 'gtm-api-responses' })
);

registerRoute(
  ({ url }) => url.origin === 'https://cdn.jsdelivr.net/',
  new StaleWhileRevalidate({ cacheName: 'selection-sharer-responses' })
);
