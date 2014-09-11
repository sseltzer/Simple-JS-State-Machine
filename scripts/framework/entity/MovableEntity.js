(function () {
  define(["Entity"], function() {
    SSMApp.Entity.MovableEntity = function(appconfig, entityAttr) {
      SSMApp.Entity.BaseEntity.apply(this, [appconfig, entityAttr]);
      var baseAttr = {v:0, a:0};
      for(var k in baseAttr) this.entityAttr[k] = (entityAttr[k]) ? entityAttr[k] : baseAttr[k];
      this.init();
    }
    var obj = SSMApp.Entity.MovableEntity;
    obj.prototype = Object.create(SSMApp.Entity.BaseEntity.prototype);
  });
}());