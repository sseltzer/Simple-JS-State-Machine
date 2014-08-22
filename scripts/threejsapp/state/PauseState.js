define(["State", "PauseBackgroundScreen", "TextScreen"], function() {
  window.PauseState = function(appconfig) {
    State.apply(this, [appconfig]);
    this.name = "PauseState";
  }
  PauseState.prototype = Object.create(State.prototype);
  PauseState.prototype.init = function() {
    this.scene = new THREE.Scene();
    this.addScreen(new PauseBackgroundScreen(this, this.appconfig));
  }
});