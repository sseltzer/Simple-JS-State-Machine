console.log("main begin")
define([
    "App",
  ], function() {

  var Application = new AppConfig();
  //Application.prototype = new AppConfig();
  Application.prototype = Object.create(AppConfig.prototype);
  Application.prototype.init = function() {
    setupDatGui();
    setPlayState();
  }
  var canvas, context;

  Application.prototype.update = function(updateTime) {
    state.updateLoop(updateTime);
  }
  function setPlayState() {
    state = new PlayState(canvas, context);
  }
  function setPauseState() {      
    state = new PauseState(canvas, context);
  }
  var screenInc = 1;
  function addTextScreen() {
    state.addScreen(new TextScreen(state, canvas, context))
  }
  function removeTextScreen() {
    console.log((state instanceof PlayState))
    if (state instanceof PlayState)
      state.removeScreen(screenInc++)
  }
  function setupDatGui() {
    var GuiConfig = function() {
      this.setPlayState = setPlayState;
      this.setPauseState = setPauseState;
      this.addTextScreen = addTextScreen;
      this.removeTextScreen = removeTextScreen;
    };
    var guiConfig = new GuiConfig();
    
    var gui  = new dat.GUI();
    gui.add(appConfig, 'setPlayState');
    gui.add(appConfig, 'setPauseState');
    gui.add(appConfig, 'addTextScreen');
    gui.add(appConfig, 'removeTextScreen');
  }

  window.App = new SST(Application);
  window.App.start();
});