define(["Screen"], function() {
  window.BackgroundScreen = function(state, appconfig) {
    Screen.apply(this, [state, appconfig]);
  }
  BackgroundScreen.prototype = Object.create(Screen.prototype);
  BackgroundScreen.prototype.draw = function(updateTime) {
    var context = this.appconfig.context;
    var canvas = context.canvas;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // add linear gradient
    var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);
     // light blue
    grd.addColorStop(0, '#8ED6FF');
    // dark blue
    grd.addColorStop(1, '#004CB3');
    context.fillStyle = grd;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
});