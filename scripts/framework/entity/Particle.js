(function () {
  define(["MovableEntity"], function() {
    SSMApp.Entity.Particle = function(appconfig, entityAttr) {
      SSMApp.Entity.MovableEntity.apply(this, [appconfig, entityAttr]);
      var baseAttr = {destroy:false, ttl:(3 * 60)};
      for(var k in baseAttr) this.entityAttr[k] = (entityAttr[k]) ? entityAttr[k] : baseAttr[k];
        console.log(this.entityAttr)
      this.init();

      var geometry = new THREE.BoxGeometry(1,1,1); 
      
      var texture = THREE.ImageUtils.loadTexture('assets/textures/crate.png');
      texture.anisotropy = this.appconfig.renderer.getMaxAnisotropy();
      var material = new THREE.MeshBasicMaterial( { map: texture } );

      this.cube = new THREE.Mesh(geometry, material); 
      this.appconfig.state.scene.add(this.cube); 
    }
    var obj = SSMApp.Entity.Particle;
    obj.prototype = Object.create(SSMApp.Entity.MovableEntity.prototype);
    obj.prototype.update = function(updateTime) {
      this.entityAttr.ttl -= 1;
      if (this.entityAttr.ttl < 0) this.entityAttr.destroy = true;

      this.cube.rotation.x += 0.005;
      this.cube.rotation.y += 0.01;
      this.entityAttr.x += this.entityAttr.v;

      this.cube.position.x = this.entityAttr.x;
    };
    obj.prototype.draw = function(updateTime) {
      this.appconfig.renderer.render(this.appconfig.state.scene, this.appconfig.camera);
    };
    obj.prototype.destroy = function() {
      this.appconfig.state.scene.remove(this.cube);
    };
  });
}());