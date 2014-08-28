(function () {
  define(["PlayBackground", "PlayCube"], function() {
    SSMApp.PlayState = function(appconfig) {
      this.parent = SSMApp.State;
      this.nameStr = "PlayState";
      SSMApp.State.apply(this, [appconfig]);
    }
    var obj = SSMApp.PlayState;
    obj.prototype = Object.create(SSMApp.State.prototype);
    obj.prototype.init = function() {
      this.scene = new THREE.Scene();
      this.addScreen(new SSMApp.PlayBackground(this, this.appconfig));
      this.addScreen(new SSMApp.PlayCube(this, this.appconfig));
/*
      this.clock = new THREE.Clock();
      this.controls = new THREE.FirstPersonControls(this.appconfig.camera);
      this.controls.movementSpeed = 10;
      this.controls.lookSpeed = 0.125;
      this.controls.lookVertical = true;*/
    }
    obj.prototype.update = function(updateTime) {
      SSMApp.State.prototype.update.apply(this);
      //this.controls.update(this.clock.getDelta());
    };
  });
}());
  