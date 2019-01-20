/*
var model = Model({
  resourceName: '表名'
})
*/
window.Model = function(options){
    let resourceName = options.resourceName
    return {
      init: function(){
        var APP_ID = 'TsDnap9SEXjSvGSowP7gXXJC-gzGzoHsz'
        var APP_KEY = 'rGye31p12mM3wFpNRn9RADu9'
        AV.init({ appId: APP_ID, appKey: APP_KEY })
      },
      fetch: function(){
        var query = new AV.Query(resourceName);
        return query.find() // Promise 对象
      },
      save: function(object){
        var X = AV.Object.extend(resourceName);
        var x = new X();
        return x.save(object)
      }
    }
  }
  