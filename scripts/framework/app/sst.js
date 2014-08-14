define([
    "include"
  ], function() {
    
    window.SST = function(appconfig) {
      this.appconfig = appconfig;
      appconfig.canvas = this.canvas;
    }
    window.SSTCanvas = document.getElementById("myCanvas");
    window.SSTContext = SSTCanvas.getContext('2d');

    SST.prototype.start = function() {
      this.appconfig.init();
      requestAnimationFrame(this.updateLoop.bind(this));
    }

    SST.prototype.updateLoop = function(updateTime) {
      this.appconfig.update(updateTime);
      requestAnimationFrame(this.updateLoop.bind(this));
  }
});