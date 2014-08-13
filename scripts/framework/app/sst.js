console.log("sst begin")
define([
    "include"
  ], function() {
    console.log("sst callback")
    

    window.SST = function(appconfig) {
      this.canvas = document.getElementById("myCanvas");
      this.context = this.canvas.getContext('2d');
      this.appconfig = appconfig;
      this.loopCounter = 0;
    }

    SST.prototype.start = function() {
      console.log("starting");
      console.log(this.appconfig)
      this.appconfig.init();
      this.updateLoop(0);
    }

    SST.prototype.updateLoop = function(updateTime) {
      console.log("updating");
      console.log(this)
      console.log(window.SST)
      console.log(window.SST.appconfig)
      console.log(window.SST.loopCounter)
      window.SST.loopCounter++;
      //window.SST.appconfig.update(updateTime);
      requestAnimationFrame(this.updateLoop);
}
});
console.log("sst end")