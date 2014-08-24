define(["Screen"], function() {
  window.PlayCube = function(state, appconfig) {
    Screen.apply(this, [state, appconfig]);
    console.log("PlayCube")
    var geometry = new THREE.BoxGeometry(1,1,1); 
    
    var texture = THREE.ImageUtils.loadTexture('assets/textures/crate.png');
    texture.anisotropy = appconfig.renderer.getMaxAnisotropy();
    var material = new THREE.MeshBasicMaterial( { map: texture } );

    this.cube = new THREE.Mesh(geometry, material); 
    this.state.scene.add(this.cube);
  }
  PlayCube.prototype = Object.create(Screen.prototype);
  PlayCube.prototype.draw = function(updateTime) {
    this.cube.rotation.x += 0.005;
    this.cube.rotation.y += 0.01;
    this.appconfig.renderer.render(this.state.scene, this.appconfig.camera);
  }
});