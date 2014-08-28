(function () {
  SSMApp.PauseBackground = function(state, appconfig) {
    SSMApp.Screen.apply(this, [state, appconfig]);
    this.path = 'assets/textures/';
    this.urls = [
      this.path + 'blue1.png', //back
      this.path + 'blue3.png', //front
      this.path + 'blue5.png', //top
      this.path + 'blue6.png', //bot
      this.path + 'blue2.png', //right
      this.path + 'blue4.png'  //left
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
  }
  var obj = SSMApp.PauseBackground;

  obj.prototype = Object.create(SSMApp.Screen.prototype);
  obj.prototype.draw = function(updateTime) {
    this.shader.uniforms['tCube'].value = this.cubemap;
    this.appconfig.renderer.render(this.state.scene, this.appconfig.camera);
  }
}());
  