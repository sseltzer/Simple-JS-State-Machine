(function () {
  var Entity = function(context) {
    this.context = context;
    this.init();
  }
  Entity.prototype.init = function() {}
  Entity.prototype.update = function(updateTime) {}
  Entity.prototype.draw = function(updateTime) {}
}());