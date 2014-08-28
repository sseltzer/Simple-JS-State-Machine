(function () {
  define(["PauseBackground", "PauseCube"], function() {
    SSMApp.PauseState = function(appconfig) {
      this.nameStr = "PauseState";
      SSMApp.State.apply(this, [appconfig]);
    }
    var obj = SSMApp.PauseState;

    obj.prototype = Object.create(SSMApp.State.prototype);
    obj.prototype.init = function() {
      this.scene = new THREE.Scene();
      this.addScreen(new SSMApp.PauseBackground(this, this.appconfig));
      this.addScreen(new SSMApp.PauseCube(this, this.appconfig));

      this.controls = new SSMApp.FirstPersonControls(this.hid, this.appconfig.camera);
      /*
      this.clock = new THREE.Clock();
      this.controls = new THREE.FirstPersonControls(this.appconfig.camera);
      this.controls.movementSpeed = 10;
      this.controls.lookSpeed = 0.125;
      this.controls.lookVertical = true;
      */
    }
    obj.prototype.update = function(updateTime) {
      SSMApp.State.prototype.update.apply(this);
      this.controls.update(updateTime)
      //this.controls.update(this.clock.getDelta());
    };
  });
}());
  