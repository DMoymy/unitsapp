//Service worker script

let CACHE_NAME = 'unitsapp-cache-v1';
var cache_asset = [
       
       './',

       './index.html',

       './images/favicon.ico',

       './images/logo.png',

       './images/icon192.png',

       './images/scale.png',

       './images/thermo.png',
        
        './images/Me.png',

       './css/unitsapp.css',

       './js/convLib.js'
     ];


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open(CACHE_NAME).then(function(cache) {
     return cache.addAll(cache_asset);
   })
 );
});


self.addEventListener('fetch', function(event) {

console.log(event.request.url);

event.respondWith(

caches.match(event.request).then(function(response) {

return response || fetch(event.request);

})

);

});