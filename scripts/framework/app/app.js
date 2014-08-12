define([
    "include",
  ], function() {
    var canvas, context;
  
  function start(appconfig) {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext('2d');

    appconfig.init();

    updateLoop(0);
  }

  function updateLoop(updateTime) {
    appconfig.update();
    requestAnimationFrame(updateLoop);
  }
  function setupDatGui() {
    var AppConfig = function() {
      this.setPlayState = setPlayState;
      this.setPauseState = setPauseState;
      this.addTextScreen = addTextScreen;
      this.removeTextScreen = removeTextScreen;
    };
    var appConfig = new AppConfig();
    
    var gui  = new dat.GUI();
    gui.add(appConfig, 'setPlayState');
    gui.add(appConfig, 'setPauseState');
    gui.add(appConfig, 'addTextScreen');
    gui.add(appConfig, 'removeTextScreen');
  }
});