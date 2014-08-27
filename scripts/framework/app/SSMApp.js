(function () {
  window.SSMApp = function(){};

  SSMApp.AppConfig = function(){};
  var obj = SSMApp.AppConfig;
  obj.prototype.init = function(){};
  obj.prototype.update = function(updateTime){};

  SSMApp.includeAll = function() {
    require.config({
      paths: {
        "SSMApp"                 : route("app/SSMApp"),
        "HID"                    : route("hid/HID"),
        "Keyboard"               : route("hid/Keyboard"),
        "Mouse"                  : route("hid/Mouse"),
        "State"                  : route("state/State"),
        "Screen"                 : route("screen/Screen"),
        "CanvasSM"               : route("app/CanvasSM"),
        "ThreejsSM"              : route("app/ThreejsSM"),
      }
    });
    function route(path) {
      return "../framework/" + path;
    }
    require([
      "HID",
      "State",
      "Screen",
      "CanvasSM",
      "ThreejsSM",
    ], function() {
    });
  };
  SSMApp.includeAll();
}());