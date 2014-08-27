(function () {
  SSMApp.AssetLoader = function(callback) {
    /*
    console.log("AssetLoader called")
    this.cubeTexture = THREE.ImageUtils.loadTexture('assets/textures/i1.png', new THREE.UVMapping(), function(){
      console.log("texture done loading");
      callback.call();
    });
    console.log('AssetLoader done')
    */
    callback.call();
  };
}());
  