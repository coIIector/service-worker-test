var date = new Date().toISOString();

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
    clients.matchAll({
        includeUncontrolled: false,
        type: 'window'
    }).then(function (matchedClients) {
        matchedClients.forEach(function (client) {
            console.log("client", client);
            client.postMessage([date, new Date().toISOString()]);
        });
    });
}, 5000);
