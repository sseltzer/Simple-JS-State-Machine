(function () {
  define([
      "AssetLoader",
      "PlayState", 
      "PauseState"
    ], function() {

    window.Application = new SSMApp.AppConfig();
    var obj = Application;

    obj.prototype = Object.create(SSMApp.AppConfig.prototype);
    obj.init = function() {
      this.playState = new SSMApp.PlayState(this);
      this.pauseState = new SSMApp.PauseState(this);
      this.setPauseState();
      setupDatGui();
    }

    obj.update = function(updateTime) {
      this.state.updateLoop(updateTime);
    }
    obj.setPlayState = function() {
      Application.state = Application.playState;
    }
    obj.setPauseState = function() {
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

    Application.AssetLoader = new SSMApp.AssetLoader(begin);
    function begin() {
      Application = Application;
      Application.SSMApp = new SSMApp.ThreejsSM(Application);
      Application.SSMApp.start();
    }
  });
}());
  