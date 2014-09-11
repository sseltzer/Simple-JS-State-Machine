(function () {
  SSMApp.Entity = function(){}
  SSMApp.Entity.BaseEntity = function(appconfig, entityAttr) {
    this.appconfig = appconfig;
    var baseAttr = {x:0, y:0, z:0};
    this.entityAttr = baseAttr;
    for(var k in baseAttr) this.entityAttr[k] = (entityAttr[k]) ? entityAttr[k] : baseAttr[k];
    this.init();
  }
  var obj = SSMApp.Entity.BaseEntity;
  obj.prototype.init = function() {}
  obj.prototype.update = function(updateTime) {}
  obj.prototype.draw = function(updateTime) {}
}());