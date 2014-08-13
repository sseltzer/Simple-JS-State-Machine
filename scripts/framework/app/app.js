console.log("app begin")
define([
    "include"
  ], function() {
    console.log("app callback")
    var canvas, context;

    window.App = function() {}

    App.prototype.start = function(appconfig) {
      canvas = document.getElementById("myCanvas");
      context = canvas.getContext('2d');

      appconfig.init();

      updateLoop(0);
    }

    App.prototype.updateLoop = function(updateTime) {
      appconfig.update();
      requestAnimationFrame(updateLoop);
}
});
console.log("app end")