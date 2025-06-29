
// Service worker for offline caching (no installation features)

const CACHE_NAME = 'ridoan-portfolio-v2';
const CERTIFICATE_CACHE = 'certificate-images-v1';
const PROFILE_CACHE = 'profile-images-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/Resume.pdf',
  '/profile.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((fetchResponse) => {
        // Cache certificate images from postimg.cc
        if (event.request.url.includes('i.postimg.cc')) {
          return caches.open(CERTIFICATE_CACHE).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }

        // Cache profile images from GitHub
        if (event.request.url.includes('github.com') && event.request.url.includes('RidoanDev.png')) {
          return caches.open(PROFILE_CACHE).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }

        // Cache other important assets
        if (event.request.url.includes('Resume.pdf') || 
            event.request.url.endsWith('.css') || 
            event.request.url.endsWith('.js') ||
            event.request.url.endsWith('.jpg') ||
            event.request.url.endsWith('.png')) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        }

        return fetchResponse;
      }).catch(() => {
        // Return cached version if network fails
        return caches.match(event.request);
      });
    })
  );
});
