
// This is a simple service worker file that will be compiled by vite-plugin-pwa

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('ridoan-portfolio-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/Resume.pdf',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Cache important assets but don't cache everything
        if (event.request.url.includes('Resume.pdf') || 
            event.request.url.endsWith('.css') || 
            event.request.url.endsWith('.js')) {
          return caches.open('ridoan-portfolio-v1').then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }
        return fetchResponse;
      });
    })
  );
});
