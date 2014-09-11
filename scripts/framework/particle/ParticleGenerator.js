(function () {
  define(["Particle"], function() {
    SSMApp.ParticleGenerator = function(appconfig) {
      this.appconfig = appconfig;
      this.particles = [];
    };
    var obj = SSMApp.ParticleGenerator;
    obj.prototype.update = function(updateTime) {
      for (var i = 0; i < this.particles.length; ++i) {
        if (this.particles[i] === undefined) continue;
        this.particles[i].update(updateTime);
        if (this.particles[i].entityAttr.destroy) {
          this.particles[i].destroy();
          this.particles.splice(i, 1);
        }
      }
    };
    obj.prototype.draw = function(updateTime) {
      for (var i = 0; i < this.particles.length; ++i) {
        if (this.particles[i] === undefined) continue;
        this.particles[i].draw(updateTime);
      }
    };
    obj.prototype.addNewRandom = function() {
      var entityAttr = {
        v:0.1
      }
      var particle = new SSMApp.Entity.Particle(this.appconfig, entityAttr);
      this.particles.push(particle);
    };
  });
}());