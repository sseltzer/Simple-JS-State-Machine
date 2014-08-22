define(["State", "BackgroundScreen", "TextScreen"], function() {
  window.PlayState = function(appconfig) {
    State.apply(this, [appconfig]);
    this.name = "PlayState";
  }
  PlayState.prototype = Object.create(State.prototype);
  PlayState.prototype.init = function() {
    this.scene = new THREE.Scene();
    this.addScreen(new BackgroundScreen(this, this.appconfig));
    this.addScreen(new PlayScreen(this, this.appconfig));
  }
});