define(["Screen"], function() {
  window.PlayBackground = function(state, appconfig) {
    Screen.apply(this, [state, appconfig]);
    console.log("PlayBackground")
    this.path = 'assets/textures/';
    this.urls = [
      this.path + 'brown1.png', //back
      this.path + 'brown3.png', //front
      this.path + 'brown5.png', //top
      this.path + 'brown6.png', //bot
      this.path + 'brown2.png', //right
      this.path + 'brown4.png'  //left
    ];
    this.cubemap = THREE.ImageUtils.loadTextureCube(this.urls); // load textures
    this.cubemap.format = THREE.RGBFormat;

    this.shader = THREE.ShaderLib['cube']; // init cube shader from built-in lib
    this.shader.uniforms['tCube'].value = this.cubemap; // apply textures to shader

    // create shader material
    this.skyBoxMaterial = new THREE.ShaderMaterial({
      fragmentShader: this.shader.fragmentShader,
      vertexShader: this.shader.vertexShader,
      uniforms: this.shader.uniforms,
      depthWrite: false,
      side: THREE.BackSide
    });

    // create skybox mesh
    this.skybox = new THREE.Mesh(new THREE.BoxGeometry(20000, 20000, 20000), this.skyBoxMaterial);

    this.state.scene.add(this.skybox);
    console.log(state.nameStr)
  }
  PlayBackground.prototype = Object.create(Screen.prototype);
  PlayBackground.prototype.draw = function(updateTime) {
    this.appconfig.renderer.render(this.state.scene, this.appconfig.camera);
  }
});