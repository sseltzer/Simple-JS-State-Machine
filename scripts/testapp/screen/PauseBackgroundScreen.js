define(["Screen"], function() {
  window.PauseBackgroundScreen = function(state, canvas, context) {
    Screen.apply(this, [state, canvas, context]);
  }
  PauseBackgroundScreen.prototype = Object.create(Screen.prototype);
  PauseBackgroundScreen.prototype.draw = function(updateTime) {
    var context = this.context;
    var canvas = this.canvas;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // add linear gradient
    var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
     // light blue
    grd.addColorStop(0, '#004CB3');
    // dark blue
    grd.addColorStop(1, '#8ED6FF');
    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
});