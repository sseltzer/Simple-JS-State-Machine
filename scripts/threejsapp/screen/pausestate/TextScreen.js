(function () {
  define(["Screen"], function() {
    window.TextScreen = function(state, appconfig) {
      Screen.apply(this, [state, appconfig]);
    }
    TextScreen.prototype = Object.create(Screen.prototype);
    TextScreen.prototype.draw = function(updateTime) {
    }
  });
}());
  