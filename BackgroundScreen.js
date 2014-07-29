var BackgroundScreen = function(state, canvas, context) {
  Screen.apply(this, [state, canvas, context]);
}
BackgroundScreen.prototype = Object.create(Screen.prototype);
BackgroundScreen.prototype.draw = function(updateTime) {
  var context = this.context;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
}