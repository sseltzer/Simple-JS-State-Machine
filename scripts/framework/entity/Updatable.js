(function () {
  var Updatable = function(appconfig) {
    this.appconfig = appconfig;
    this.init();
  }
  Updatable.prototype.init = function() {}
  Updatable.prototype.update = function(updateTime) {}
}());