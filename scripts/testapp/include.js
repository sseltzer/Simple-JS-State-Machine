console.log("app include start");
require.config({
  paths: {
    "datgui"                 : "http://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min",
    "PauseBackgroundScreen"  : route("screen/PauseBackgroundScreen"),
    "BackgroundScreen"       : route("screen/BackgroundScreen"),
    "TextScreen"             : route("screen/TextScreen"),
    "PlayState"              : route("state/PlayState"),
    "PauseState"             : route("state/PauseState"),
    "App"                    : route("framework/app/include"),
    "main"                   : route("testapp/main")
  }
});
function route(path) {
  return "../" + path;
}
require(["datgui"]);
require(["main"]);
console.log("app include done");