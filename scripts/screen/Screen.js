window.Screen = function(state, canvas, context) {
  this.state = state;
  this.canvas = canvas;
  this.context = context;
  this.init();
};
Screen.prototype.init = function() {
}
Screen.prototype.update = function(updateTime) {
}
Screen.prototype.draw = function(updateTime) {
  var context = this.context;
}