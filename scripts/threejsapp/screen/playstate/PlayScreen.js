define(["Screen"], function() {
  window.PlayScreen = function(state, appconfig) {
    Screen.apply(this, [state, appconfig]);
    //this.scene = new THREE.Scene();
    var geometry = new THREE.BoxGeometry(1,1,1); 
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00}); 
    this.cube = new THREE.Mesh(geometry, material); 
    this.state.scene.add(this.cube); 
    appconfig.camera.position.z = 5;
  }
  PlayScreen.prototype = Object.create(Screen.prototype);
  PlayScreen.prototype.draw = function(updateTime) {
    var renderer = this.appconfig.renderer;
    var camera = this.appconfig.camera;
    this.cube.rotation.x += 0.005;
    this.cube.rotation.y += 0.01;
    this.appconfig.renderer.render(this.state.scene, this.appconfig.camera);
  }
});