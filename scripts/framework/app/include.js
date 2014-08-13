console.log("framework include start");
require.config({
  paths: {
    "HID"                    : route("hid/HID"),
    "Keyboard"               : route("hid/Keyboard"),
    "State"                  : route("state/State"),
    "Screen"                 : route("screen/Screen"),
    "SST"                    : route("app/sst"),
    "AppConfig"              : route("app/appconfig")
  }
});
function route(path) {
  return "../framework/" + path;
}
define([
  "HID",
  "Keyboard",
  "State",
  "Screen",
  "SST",
  "AppConfig"
], function() {
  console.log("framework done loading");
});
console.log("framework include end");