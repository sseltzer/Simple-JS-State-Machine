require.config({
  paths: {
    "datgui"                 : "http://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min",
    "HID"                    : route("hid/HID"),
    "Keyboard"               : route("hid/Keyboard"),
    "State"                  : route("state/State"),
    "Screen"                 : route("screen/Screen"),
    "PauseBackgroundScreen"  : route("screen/PauseBackgroundScreen"),
    "BackgroundScreen"       : route("screen/BackgroundScreen"),
    "TextScreen"             : route("screen/TextScreen"),
    "PlayState"              : route("state/PlayState"),
    "PauseState"             : route("state/PauseState"),
    "main"                   : route("app/main")
  }
});
function route(path) {
  return "../" + path;
}
require(["datgui"]);
require(["main"]);