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
        "FPC"                    : route("hid/FirstPersonControls"),
        "State"                  : route("state/State"),
        "Screen"                 : route("screen/Screen"),
        "CanvasSM"               : route("app/CanvasSM"),
        "ThreejsSM"              : route("app/ThreejsSM"),
        "Entity"                 : route("entity/Entity"),
        "MovableEntity"          : route("entity/MovableEntity"),
        "Particle"               : route("entity/Particle"),
        "ParticleGenerator"      : route("particle/ParticleGenerator"),
      }
    });
    function route(path) {
      return "../framework/" + path;
    }
    require([
      "HID",
      "FPC",
      "State",
      "Screen",
      "CanvasSM",
      "ThreejsSM",
      "ParticleGenerator",
    ], function() {
    });
  };
  SSMApp.includeAll();
}());