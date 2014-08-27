(function () {
  console.log("app include start");

  var frameworkFolder = "framework/";
  var appFolder = "hybridapp/";
  var vendorFolder = "vendor/";
  require.config({
    paths: {
      "datgui"                 : route(vendorFolder    + "dat.gui.min"),
      "threejs"                : route(vendorFolder    + "three.min"),
      "App"                    : route(frameworkFolder + "app/include"),
      "PauseBackgroundScreen"  : route(appFolder       + "screen/PauseBackgroundScreen"),
      "BackgroundScreen"       : route(appFolder       + "screen/BackgroundScreen"),
      "TextScreen"             : route(appFolder       + "screen/TextScreen"),
      "PlayScreen"             : route(appFolder       + "screen/PlayScreen"),
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
}());
  