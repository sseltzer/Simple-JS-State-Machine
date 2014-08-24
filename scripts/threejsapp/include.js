console.log("app include start");

var frameworkFolder = "framework/";
var appFolder = "threejsapp/";
var vendorFolder = "vendor/";
require.config({
  paths: {
    "datgui"                 : route(vendorFolder    + "dat.gui.min"),
    "threejs"                : route(vendorFolder    + "three.min"),
    "FirstPersonControls"    : route(vendorFolder    + "FirstPersonControls"),
    "App"                    : route(frameworkFolder + "app/include"),
    "AssetLoader"            : route(appFolder       + "assets/AssetLoader"),
    "PauseBackground"        : route(appFolder       + "screen/pausestate/PauseBackground"),
    "PauseCube"              : route(appFolder       + "screen/pausestate/PauseCube"),
    "TextScreen"             : route(appFolder       + "screen/pausestate/TextScreen"),
    "PlayBackground"         : route(appFolder       + "screen/playstate/PlayBackground"),
    "PlayCube"               : route(appFolder       + "screen/playstate/PlayCube"),
    "PlayState"              : route(appFolder       + "state/PlayState"),
    "PauseState"             : route(appFolder       + "state/PauseState"),
    "main"                   : route(appFolder       + "main")
  }
});
function route(path) {
  return "../" + path;
}
require(["datgui", "threejs"], function() {
  require(["FirstPersonControls"], function() {
    require(["main"]);
  });
});

console.log("app include done");