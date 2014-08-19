console.log("app include start");
require.config({
  paths: {
    "datgui"                 : "http://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min",
    "threejs"                : route("testapp/three.min"),
    "PauseBackgroundScreen"  : route("testapp/screen/PauseBackgroundScreen"),
    "BackgroundScreen"       : route("testapp/screen/BackgroundScreen"),
    "TextScreen"             : route("testapp/screen/TextScreen"),
    "PlayScreen"             : route("testapp/screen/PlayScreen"),
    "PlayState"              : route("testapp/state/PlayState"),
    "PauseState"             : route("testapp/state/PauseState"),
    "App"                    : route("framework/app/include"),
    "main"                   : route("testapp/main")
  }
});
function route(path) {
  return "../" + path;
}
require(["datgui", "threejs"]);
require(["main"]);
console.log("app include done");