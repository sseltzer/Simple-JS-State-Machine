define([
    "include"
  ], function() {
    
    window.ThreejsSM = function(appconfig) {
      this.appconfig = appconfig;
      //appconfig.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000); 
      appconfig.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 20000 );
      appconfig.renderer = new THREE.WebGLRenderer(); 
      appconfig.renderer.setSize(window.innerWidth, window.innerHeight); 
      document.body.appendChild(appconfig.renderer.domElement); 
    }

    ThreejsSM.prototype.start = function() {
      this.appconfig.init();
      requestAnimationFrame(this.updateLoop.bind(this));
    }

    ThreejsSM.prototype.updateLoop = function(updateTime) {
      this.appconfig.update(updateTime);
      requestAnimationFrame(this.updateLoop.bind(this));
  }
});