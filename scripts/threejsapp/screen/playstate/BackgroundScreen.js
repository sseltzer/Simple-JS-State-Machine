define(["Screen"], function() {
  function onload() {
    console.log("loaded")
  }
  window.BackgroundScreen = function(state, appconfig) {
    Screen.apply(this, [state, appconfig]);
    console.log("begin BackgroundScreen")
    var path = 'assets/textures/';
    var urls = [
      path + '4.png',
      path + '2.png',
      path + '6.png',
      path + '5.png',
      path + '1.png',
      path + '3.png'
    ];
    var cubemap = THREE.ImageUtils.loadTextureCube(urls); // load textures
    cubemap.format = THREE.RGBFormat;

    var shader = THREE.ShaderLib['cube']; // init cube shader from built-in lib
    shader.uniforms['tCube'].value = cubemap; // apply textures to shader

    // create shader material
    var skyBoxMaterial = new THREE.ShaderMaterial({
      fragmentShader: shader.fragmentShader,
      vertexShader: shader.vertexShader,
      uniforms: shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide
    });

    // create skybox mesh
    var skybox = new THREE.Mesh(new THREE.BoxGeometry(1000, 1000, 1000), skyBoxMaterial);

    this.state.scene.add(skybox);
  }
  BackgroundScreen.prototype = Object.create(Screen.prototype);
  BackgroundScreen.prototype.draw = function(updateTime) {
    var renderer = this.appconfig.renderer;
    var camera = this.appconfig.camera;
    this.appconfig.renderer.render(this.state.scene, this.appconfig.camera);
  }
});