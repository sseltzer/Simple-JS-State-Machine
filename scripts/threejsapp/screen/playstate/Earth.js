(function () {
  SSMApp.Earth = function(state, appconfig) {
    SSMApp.Screen.apply(this, [state, appconfig]);

    //var light = new THREE.AmbientLight( 0x555555 )
    var light = new THREE.AmbientLight( 0xFFFFFF )
    this.state.scene.add( light )
    this.earthMesh    = SSMApp.Earth.createEarth();
    this.state.scene.add(this.earthMesh);
    this.cloudMesh    = SSMApp.Earth.createEarthCloud();
    //this.state.scene.add(this.cloudMesh);
  }
  var obj = SSMApp.Earth;
  
  obj.prototype = Object.create(SSMApp.Screen.prototype);
  obj.prototype.draw = function(updateTime) {
    this.earthMesh.rotation.y += 1/8 * .01;
    this.cloudMesh.rotation.y += 1/8 * .05;
    this.appconfig.renderer.render(this.state.scene, this.appconfig.camera);
  }

SSMApp.Earth.createEarth  = function(){
var geometry  = new THREE.SphereGeometry(5, 32, 32)
var material  = new THREE.MeshPhongMaterial({
map : THREE.ImageUtils.loadTexture('assets/textures/mars_1k_color.jpg'),
//bumpMap : THREE.ImageUtils.loadTexture('assets/textures/earthbump4k.jpg'),
//bumpScale : 0.05,
//specularMap : THREE.ImageUtils.loadTexture('assets/textures/earthspec4k.jpg'),
//specular  : new THREE.Color('grey'),
})
var mesh  = new THREE.Mesh(geometry, material)
return mesh 
}
SSMApp.Earth.createEarthCloud = function(){
// create destination canvas
var canvasResult  = document.createElement('canvas')
canvasResult.width  = 1024
canvasResult.height = 512
//canvasResult.width  = 4000
//canvasResult.height = 2000
var contextResult = canvasResult.getContext('2d') 
// load earthcloudmap
var imageMap  = new Image();
imageMap.addEventListener("load", function() {
// create dataMap ImageData for earthcloudmap
var canvasMap = document.createElement('canvas')
canvasMap.width = imageMap.width
canvasMap.height= imageMap.height
var contextMap  = canvasMap.getContext('2d')
contextMap.drawImage(imageMap, 0, 0)
var dataMap = contextMap.getImageData(0, 0, canvasMap.width, canvasMap.height)
// load earthcloudmaptrans
var imageTrans  = new Image();
imageTrans.addEventListener("load", function(){
// create dataTrans ImageData for earthcloudmaptrans
var canvasTrans = document.createElement('canvas')
canvasTrans.width = imageTrans.width
canvasTrans.height  = imageTrans.height
var contextTrans  = canvasTrans.getContext('2d')
contextTrans.drawImage(imageTrans, 0, 0)
var dataTrans = contextTrans.getImageData(0, 0, canvasTrans.width, canvasTransss.height)
// merge dataMap + dataTrans into dataResult
var dataResult  = contextMap.createImageData(canvasMap.width, canvasMap.height)
for(var y = 0, offset = 0; y < imageMap.height; y++){
for(var x = 0; x < imageMap.width; x++, offset += 4){
dataResult.data[offset+0] = dataMap.data[offset+0]
dataResult.data[offset+1] = dataMap.data[offset+1]
dataResult.data[offset+2] = dataMap.data[offset+2]
dataResult.data[offset+3] = 255 - dataTrans.data[offset+0]
}
}
// update texture with result
contextResult.putImageData(dataResult,0,0)  
material.map.needsUpdate = true;
})
imageTrans.src  = 'assets/textures/earthcloudmaptrans.jpg';
}, false);
imageMap.src  = 'assets/textures/earthcloudmap.jpg';
var geometry  = new THREE.SphereGeometry(5.25, 32, 32)
var material  = new THREE.MeshPhongMaterial({
map : new THREE.Texture(canvasResult),
side  : THREE.DoubleSide,
transparent : true,
opacity : 0.8,
})
var mesh  = new THREE.Mesh(geometry, material)
return mesh 
}



}());
  