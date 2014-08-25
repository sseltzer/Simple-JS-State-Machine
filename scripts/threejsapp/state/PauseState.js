define(["State", "PauseBackground", "PauseCube"], function() {
  window.PauseState = function(appconfig) {
    this.nameStr = "PauseState";
    State.apply(this, [appconfig]);
  }
  PauseState.prototype = Object.create(State.prototype);
  PauseState.prototype.init = function() {
    this.scene = new THREE.Scene();
    this.addScreen(new PauseBackground(this, this.appconfig));
    this.addScreen(new PauseCube(this, this.appconfig));

    this.clock = new THREE.Clock();
    this.controls = new THREE.FirstPersonControls(this.appconfig.camera);
    this.controls.movementSpeed = 10;
    this.controls.lookSpeed = 0.125;
    this.controls.lookVertical = true;
  }
  PauseState.prototype.update = function(updateTime) {
    State.prototype.update.apply(this);
    this.controls.update(this.clock.getDelta());
  };
});