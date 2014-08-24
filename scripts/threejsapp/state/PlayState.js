define(["State", "PlayBackground", "PlayCube"], function() {
  window.PlayState = function(appconfig) {
    this.nameStr = "PlayState";
    State.apply(this, [appconfig]);
  }
  PlayState.prototype = Object.create(State.prototype);
  PlayState.prototype.init = function() {
    console.log(this.scene)
    this.scene = new THREE.Scene();
    this.addScreen(new PlayBackground(this, this.appconfig));
    this.addScreen(new PlayCube(this, this.appconfig));

    this.clock = new THREE.Clock();
    this.controls = new THREE.FirstPersonControls(this.appconfig.camera);
    this.controls.movementSpeed = 10;
    this.controls.lookSpeed = 0.125;
    this.controls.lookVertical = true;
  }
  PlayState.prototype.update = function(updateTime) {
    State.prototype.update.apply(this);
    this.controls.update(this.clock.getDelta());
  };
});