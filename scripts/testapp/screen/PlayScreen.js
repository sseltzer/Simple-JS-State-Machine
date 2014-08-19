define(["Screen"], function() {
  window.PlayScreen = function(state, canvas, context) {
    Screen.apply(this, [state, canvas, context]);

    this.scene = new THREE.Scene(); 
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
    this.renderer = new THREE.WebGLRenderer(); 
    this.renderer.setSize(window.innerWidth, window.innerHeight); 
    document.body.appendChild(this.renderer.domElement); 
    var geometry = new THREE.BoxGeometry(1,1,1); 
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00}); 
    this.cube = new THREE.Mesh(geometry, material); 
    this.scene.add(this.cube); 
    this.camera.position.z = 5;
  }
  PlayScreen.prototype = Object.create(Screen.prototype);
  PlayScreen.prototype.draw = function(updateTime) {
    this.cube.rotation.x += 0.1;
    this.cube.rotation.y += 0.1;
    this.renderer.render(this.scene, this.camera);
  }
});