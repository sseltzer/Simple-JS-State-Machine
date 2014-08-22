define([
    "include"
  ], function() {
    
    window.CanvasSM = function(appconfig, canvasName) {
      this.appconfig = appconfig;
      appconfig.canvas = document.getElementById(canvasName);
      appconfig.context = appconfig.canvas.getContext('2d');
    }

    CanvasSM.prototype.start = function() {
      this.appconfig.init();
      requestAnimationFrame(this.updateLoop.bind(this));
    }

    CanvasSM.prototype.updateLoop = function(updateTime) {
      this.appconfig.update(updateTime);
      requestAnimationFrame(this.updateLoop.bind(this));
  }
});