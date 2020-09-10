importScripts('./cache-polyfill.js');


self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('weddingTime').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './assets/fonts/DroidSerif-Regular.ttf',
        './assets/images/leaf-1.png',
        './assets/images/leaf-2.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
