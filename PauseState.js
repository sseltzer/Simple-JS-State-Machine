var PauseState = function(canvas, context) {
  State.apply(this, [canvas, context]);
}
PauseState.prototype = Object.create(State.prototype);
PauseState.prototype.draw = function(updateTime) {
  var context = this.context;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height); 
  context.fillStyle = "#FFFFFF";
  context.font="20px Georgia";
  var dispTime = parseInt(updateTime, 10);
  context.fillText("Runtime: " + dispTime, 10, 20);
  context.fillText("Keyboard: " + this.hid.keyboard.getState(), 10, 50);
  context.fillText("PausedState", 10, 80);
}