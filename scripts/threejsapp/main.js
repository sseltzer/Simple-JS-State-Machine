console.log("main begin")
define([
    "App",
    "AssetLoader",
    "PlayState", 
    "PauseState", 
    "PauseBackgroundScreen", 
    "BackgroundScreen", 
    "PlayScreen"
  ], function() {

  var Application = new AppConfig();
  //Application.prototype = new AppConfig();
  Application.prototype = Object.create(AppConfig.prototype);
  Application.init = function() {
    this.playState = new PlayState(this);
    this.pauseState = new PauseState(this);
    this.setPauseState();
    setupDatGui();
  }
  var canvas, Application;

  Application.update = function(updateTime) {
    this.state.updateLoop(updateTime);
  }
  Application.setPlayState = function() {
    Application.state = Application.playState;
  }
  Application.setPauseState = function() {
    Application.state = Application.pauseState;
  }

    function setupDatGui() {
    var GuiConfig = function() {
      this.setPlayState = Application.setPlayState;
      this.setPauseState = Application.setPauseState;
    };
    var guiConfig = new GuiConfig();
    
    var gui  = new dat.GUI();
    gui.add(guiConfig, 'setPlayState');
    gui.add(guiConfig, 'setPauseState');
  }

  window.AssetLoader = new AssetLoader(begin);
  function begin() {
    console.log("begin called");
    window.Application = Application;
    window.App = new ThreejsSM(Application);
    window.App.start();
  }
  console.log('done')
});