(function () {
  SSMApp.Screen = function(state, appconfig) {
    this.state = state;
    this.appconfig = appconfig;
    this.init();
  };
  var obj = SSMApp.Screen;

  obj.prototype.init = function() {};
  obj.prototype.update = function(updateTime) {};
  obj.prototype.draw = function(updateTime) {};
}());
