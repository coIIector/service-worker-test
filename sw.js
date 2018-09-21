var date = Date.now();

self.addEventListener('install', function (event) {
    console.log('install', event);

    event.waitUntil(self.skipWaiting());
});
self.addEventListener('activate', function (event) {
    console.log('activate', event);

    event.waitUntil(self.clients.claim());
});
self.addEventListener('message', function (event) {
    console.log('message', event);
});

setInterval(function () {
    return clients.matchAll({includeUncontrolled: false, type: 'window'}).then(function (matchedClients) {
        matchedClients.forEach(function (client) {
            client.postMessage([date / 1000, Date.now() / 1000]);
        });
    });
}, 1000);
