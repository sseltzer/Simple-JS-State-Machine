console.log("main begin")
define([
    "App",
    "PlayState", "PauseState", "PauseBackgroundScreen", "BackgroundScreen", "PlayScreen"
  ], function() {

  var Application = new AppConfig();
  Application.prototype = Object.create(AppConfig.prototype);
  Application.init = function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    setupDatGui();

    this.playState = new PlayState(this);
    this.pauseState = new PauseState(this);
    this.setPauseState();
  }

  Application.update = function(updateTime) {
    this.state.updateLoop(updateTime);
  }
  Application.setPlayState = function() {
    Application.state = Application.playState;
  }
  Application.setPauseState = function() {
    Application.state = Application.pauseState;
  }
  Application.screenCounters = {
    "play" : 1,
    "pause" : 1
  };
  Application.addTextScreen = function() {
    var type = (Application.state instanceof PlayState) ? 'play' : 'pause';
    var last = Application.screenCounters[type];
    if ((Application.state.screenStack[last] instanceof TextScreen)) return;
    
    Application.state.addScreen(new TextScreen(Application.state, Application.canvas, Application.context))

    Application.screenCounters[type]++;
  }
  Application.removeTextScreen = function() {
    var type = (Application.state instanceof PlayState) ? 'play' : 'pause';
    var last = Application.screenCounters[type];
    if (!(Application.state.screenStack[last] instanceof TextScreen)) return;

    Application.state.removeScreen(last);

    Application.screenCounters[type]--;
  }
  function setupDatGui() {
    var GuiConfig = function() {
      this.setPlayState = Application.setPlayState;
      this.setPauseState = Application.setPauseState;
      this.addTextScreen = Application.addTextScreen;
      this.removeTextScreen = Application.removeTextScreen;
    };
    var guiConfig = new GuiConfig();
    
    var gui  = new dat.GUI();
    gui.add(guiConfig, 'setPlayState');
    gui.add(guiConfig, 'setPauseState');
    gui.add(guiConfig, 'addTextScreen');
    gui.add(guiConfig, 'removeTextScreen');
  }

  window.Application = Application;
  window.App = new CanvasSM(Application, 'myCanvas');
  window.App.start();
});