(function () {
  define(["HID"], function() {
    SSMApp.FirstPersonControls = function(hid, camera) {
      this.hid = hid;
      this.camera = camera;
      this.moveSpeed = 1;
      this.lookSpeed = 0.005;
      this.lastMousePosition = {x: 0, y: 0};
      this.mousePosition     = {x: 0, y: 0};
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

      var mouse = this.hid.mouse;
      this.lastMousePosition = this.mousePosition;
      this.mousePosition = {
        x: SSMApp.Mouse.position.x,
        y: SSMApp.Mouse.position.y
      };
      var mouseMoveDistance = {
        x: (this.mousePosition.x - this.lastMousePosition.x), 
        y: (this.mousePosition.y - this.lastMousePosition.y)
      };
      camera.rotateY(this.lookSpeed * (SSMApp.timeDelta / 100) * -mouseMoveDistance.x);
      camera.rotateX(this.lookSpeed * (SSMApp.timeDelta / 100) * -mouseMoveDistance.y);
    };
  });
}());