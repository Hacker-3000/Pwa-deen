const cacheName = 'easul-v1';
const assets = ['./', './index.html', './home.html', './settings.html', './manifest.json'];

// تثبيت الخدمة وتخزين الملفات
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق حتى بدون إنترنت
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});