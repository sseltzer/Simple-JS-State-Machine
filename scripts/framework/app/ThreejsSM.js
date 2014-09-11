(function () {
  SSMApp.ThreejsSM = function (appconfig) {
    this.appconfig = appconfig;
    //appconfig.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    appconfig.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 20000);
    appconfig.renderer = new THREE.WebGLRenderer();
    appconfig.renderer.setSize(window.innerWidth, window.innerHeight);
    //appconfig.renderer.domElement
    document.body.appendChild(appconfig.renderer.domElement);
    SSMApp.lastTime = 0;
  }
  var obj = SSMApp.ThreejsSM || {};

  obj.prototype.start = function() {
    this.appconfig.init();
    requestAnimationFrame(this.updateLoop.bind(this));
  }

  obj.prototype.updateLoop = function(updateTime) {
    SSMApp.timeDelta = updateTime - SSMApp.lastTime;
    SSMApp.lastTime = updateTime;
    this.appconfig.update(updateTime);
    requestAnimationFrame(this.updateLoop.bind(this));
  }
}());