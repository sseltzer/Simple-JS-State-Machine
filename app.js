var canvas,
    context,
    appConfig;


function init() {
  canvas = document.getElementById("myCanvas");
  context = canvas.getContext('2d');

  var AppConfig = function() {
    this.setPlayState = setPlayState;
    this.setPauseState = setPauseState;
    this.addTextScreen = addTextScreen;
    this.removeTextScreen = removeTextScreen;
  };
  appConfig = new AppConfig();
  
  window.onload = function() {
    var gui  = new dat.GUI();
    gui.add(appConfig, 'setPlayState';)
    gui.add(appConfig, 'setPauseState');
    gui.add(appConfig, 'addTextScreen');
    gui.add(appConfig, 'removeTextScreen');
  };
  
  setPlayState();
  
  updateLoop(0);
}

function updateLoop(updateTime) {
  state.updateLoop(updateTime);
  requestAnimationFrame(updateLoop);
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
init();
