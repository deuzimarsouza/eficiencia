const CACHE_NAME = 'eficiencia-pwa-v1';

const APP_SHELL = [
    './',
    './index.html',
    './manifest.webmanifest',
    './src/app-pwa.js',
    './src/data/modelos-db.js',
    './src/dev/user-dev.jpg',
    './src/logo/manufacturing.png',
    './src/icons/app-icon-192.png',
    './src/icons/app-icon-512.png',
    './src/icons/disk.png',
    './src/icons/magic-wand.png',
    './src/icons/mop.png',
    './src/icons/trash.png',
    './src/fonts/BricolageGrotesque-Bold.otf',
    './src/fonts/BricolageGrotesque-Medium.otf',
    './src/fonts/BricolageGrotesque-Regular.otf',
    './src/fonts/LufgaBold.ttf',
    './src/fonts/LufgaMedium.ttf',
    './src/fonts/LufgaRegular.ttf',
    './src/fonts/LufgaSemiBold.ttf',
    './pages/absenteismo.html',
    './pages/calculadora-de-eficiencia.html',
    './pages/modelos.html',
    './pages/potencial-rapido.html',
    './pages/potencial-turno1.html',
    './pages/potencial-turno2.html',
    './pages/potencial-turno3.html',
    './pages/preparacao.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const requestUrl = new URL(event.request.url);
    if (requestUrl.origin !== self.location.origin) return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then(response => {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                return response;
            });
        })
    );
});
