// Nome do cache
const cacheName = 'my-cache';

// Arquivos para armazenar em cache
const filesToCache = [
  '/',
  '/index.jsx',
  '/Header.jsx',
  '/Main.jsx',
  '/Section.jsx',
  '/Services.jsx',
  '/Footer.jsx',
  '/globals.css',
  // Adicione aqui outros arquivos estáticos que deseja armazenar em cache
];

// Instalação do Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (name !== cacheName) {
              return caches.delete(name);
            }
          })
        );
      })
  );
});

// Interceptação de solicitações
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
