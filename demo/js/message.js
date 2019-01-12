var APP_ID = 'yDzTqQta1s6Hx3u2aF8rh3wl-gzGzoHsz';
var APP_KEY = 'fWTxEtDNKfoWuVsOidOkxRdP';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})