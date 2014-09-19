(function () {
  var frameworkFolder = "framework/";
  var appFolder = "threejsapp/";
  var vendorFolder = "vendor/";
  require.config({
    paths: {
      "datgui"                 : route(vendorFolder    + "dat.gui.min"),
      "threejs"                : route(vendorFolder    + "three.min"),
      "FirstPersonControls"    : route(vendorFolder    + "FirstPersonControls"),
      "App"                    : route(frameworkFolder + "app/SSMApp"),
      "AssetLoader"            : route(appFolder       + "assets/AssetLoader"),
      "PauseBackground"        : route(appFolder       + "screen/pausestate/PauseBackground"),
      "PauseCube"              : route(appFolder       + "screen/pausestate/PauseCube"),
      "TextScreen"             : route(appFolder       + "screen/pausestate/TextScreen"),
      "ParticleScreen"         : route(appFolder       + "screen/pausestate/ParticleScreen"),
      "PlayBackground"         : route(appFolder       + "screen/playstate/PlayBackground"),
      "Earth"               : route(appFolder       + "screen/playstate/Earth"),
      "PlayState"              : route(appFolder       + "state/PlayState"),
      "PauseState"             : route(appFolder       + "state/PauseState"),
      "main"                   : route(appFolder       + "main")
    }
  });
  function route(path) {
    return "../" + path;
  }
  require(["datgui", "threejs", "FirstPersonControls"], function() {
    require(["App"], function() {
      require(["main"]);
    });
  });
}());
