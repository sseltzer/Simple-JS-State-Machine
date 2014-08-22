require.config({
  paths: {
    "HID"                    : route("hid/HID"),
    "Keyboard"               : route("hid/Keyboard"),
    "State"                  : route("state/State"),
    "Screen"                 : route("screen/Screen"),
    "CanvasSM"               : route("app/CanvasSM"),
    "ThreejsSM"              : route("app/ThreejsSM"),
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
  "CanvasSM",
  "ThreejsSM",
  "AppConfig"
], function() {
});