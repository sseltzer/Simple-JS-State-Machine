(function () {
  define(["PlayBackground", "Earth"], function() {
    SSMApp.PlayState = function(appconfig) {
      this.nameStr = "PlayState";
      SSMApp.State.apply(this, [appconfig]);
    }
    var obj = SSMApp.PlayState;
    
    obj.prototype = Object.create(SSMApp.State.prototype);
    obj.prototype.init = function() {
      this.scene = new THREE.Scene();
      this.addScreen(new SSMApp.PlayBackground(this, this.appconfig));
      this.addScreen(new SSMApp.Earth(this, this.appconfig));
      this.controls = new SSMApp.FirstPersonControls(this.hid, this.appconfig.camera);
    }
    obj.prototype.update = function(updateTime) {
      SSMApp.State.prototype.update.apply(this);
      this.controls.update(updateTime);
    };
  });
}());
  