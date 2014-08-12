define(["Screen"], function() {
  window.TextScreen = function(state, canvas, context) {
    Screen.apply(this, [state, canvas, context]);
  }
  TextScreen.prototype = Object.create(Screen.prototype);
  TextScreen.prototype.draw = function(updateTime) {
    var context = this.context;
    context.fillStyle = "#FFFFFF";
    context.font="20px Georgia";
    var dispTime = parseInt(updateTime, 10);
    context.fillText("Runtime: " + dispTime, 10, 20);
    context.fillText("Keyboard: " + state.hid.keyboard.getState(), 10, 50);
    context.fillText("PlayState", 10, 80);
  }
});