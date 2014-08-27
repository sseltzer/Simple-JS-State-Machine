(function () {
  define(["Screen"], function() {
    window.TextScreen = function(state, appconfig) {
      Screen.apply(this, [state, appconfig]);
    }
    TextScreen.prototype = Object.create(Screen.prototype);
    TextScreen.prototype.draw = function(updateTime) {
      var context = this.appconfig.context;
      context.fillStyle = "#FFFFFF";
      context.font="20px Georgia";
      var dispTime = parseInt(updateTime, 10);
      context.fillText("Runtime: " + dispTime, 10, 20);
      context.fillText("Keyboard: " + this.state.hid.keyboard.getState(), 10, 50);
      context.fillText(this.state.name, 10, 80);
    }
  });
}());
  