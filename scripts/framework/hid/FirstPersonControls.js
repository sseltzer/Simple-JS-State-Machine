(function () {
  define(["HID"], function() {
    SSMApp.FirstPersonControls = function(hid, camera) {
      this.hid = hid;
      this.camera = camera;
      this.moveSpeed = 1;
      SSMApp.FirstPersonControls.lookSpeed = 0.005;

      this.hid.mouse.addOnMouseMoveEvent(function(event){
        var lookSpeed = SSMApp.FirstPersonControls.lookSpeed;
        camera.rotateY(lookSpeed * (SSMApp.timeDelta / 100) * -SSMApp.Mouse.movement.x);
        camera.rotateX(lookSpeed * (SSMApp.timeDelta / 100) * -SSMApp.Mouse.movement.y);
        SSMApp.Mouse.movement.x = 0;
        SSMApp.Mouse.movement.y = 0;
      });
    };
    var obj = SSMApp.FirstPersonControls;
    
    obj.prototype.init = function() {};
    obj.prototype.update = function(updateTime) {
      var keyboard = this.hid.keyboard;
      var camera = this.camera;
      var speed = this.moveSpeed * (SSMApp.timeDelta / 100);
      if (keyboard.down('w'))     camera.translateZ(-speed);
      if (keyboard.down('s'))     camera.translateZ( speed);
      if (keyboard.down('a'))     camera.translateX(-speed);
      if (keyboard.down('d'))     camera.translateX( speed);
      if (keyboard.down('Space')) camera.translateY( speed);
      if (keyboard.down('Shift')) camera.translateY(-speed);
      if (keyboard.down('f')) keyboard.requestFullScreen();
      if (keyboard.pressed('e')) {
        Application.state.addParticle();
      };
    };
  });
}());