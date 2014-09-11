(function () {
  define(["ParticleGenerator"], function() {
    SSMApp.ParticleScreen = function(state, appconfig) {
      SSMApp.Screen.apply(this, [state, appconfig]);
      console.log("init ParticleScreen");
      console.log(SSMApp.ParticleGenerator);
      this.particleGenerator = new SSMApp.ParticleGenerator(this.appconfig);
    }
    var obj = SSMApp.ParticleScreen;

    obj.prototype = Object.create(SSMApp.Screen.prototype);
    obj.prototype.update = function(updateTime) {
      this.particleGenerator.update(updateTime);
    };
    obj.prototype.draw = function(updateTime) {
      this.particleGenerator.draw(updateTime);
    };
    obj.prototype.addParticle = function() {
      this.particleGenerator.addNewRandom();
    };
  });
}());