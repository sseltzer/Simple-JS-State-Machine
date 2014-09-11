(function () {
  define(["PauseBackground", "PauseCube", "ParticleScreen"], function() {
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
      this.particleScreen = new SSMApp.ParticleScreen(this, this.appconfig);
      this.addScreen(this.particleScreen);
      this.controls = new SSMApp.FirstPersonControls(this.hid, this.appconfig.camera);
    }
    obj.prototype.update = function(updateTime) {
      SSMApp.State.prototype.update.apply(this);
      this.controls.update(updateTime);
    };

    obj.prototype.addParticle = function() {
      this.particleScreen.addParticle();
    };
  });
}());
  