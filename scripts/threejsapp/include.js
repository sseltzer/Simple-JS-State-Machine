console.log("app include start");

var frameworkFolder = "framework/";
var appFolder = "threejsapp/";
var vendorFolder = "vendor/";
require.config({
  paths: {
    "datgui"                 : route(vendorFolder    + "dat.gui.min"),
    "threejs"                : route(vendorFolder    + "three.min"),
    "App"                    : route(frameworkFolder + "app/include"),
    "AssetLoader"            : route(appFolder       + "assets/AssetLoader"),
    "PauseBackgroundScreen"  : route(appFolder       + "screen/pausestate/PauseBackgroundScreen"),
    "TextScreen"             : route(appFolder       + "screen/pausestate/TextScreen"),
    "BackgroundScreen"       : route(appFolder       + "screen/playstate/BackgroundScreen"),
    "PlayScreen"             : route(appFolder       + "screen/playstate/PlayScreen"),
    "PlayState"              : route(appFolder       + "state/PlayState"),
    "PauseState"             : route(appFolder       + "state/PauseState"),
    "main"                   : route(appFolder       + "main")
  }
});
function route(path) {
  return "../" + path;
}
require(["datgui", "threejs"]);
require(["main"]);
console.log("app include done");