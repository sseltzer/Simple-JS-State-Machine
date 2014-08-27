(function () {
    SSMApp.Mouse = function() {
    document.addEventListener("mouseup", SSMApp.Mouse.onMouseUp, false);
    document.addEventListener("mousedown", SSMApp.Mouse.onMouseDown, false);
    document.addEventListener("mousemove", SSMApp.Mouse.onMouseMove, false);
  };
  var obj = SSMApp.Mouse;

  obj.state = {};
  obj.onMouseUp = function (event) {
   if (!obj.state[event.button]) obj.state[event.button] = {up: false, down: false, pressed:false, dirty:false};
   obj.state[event.button] = {up: true, down: false, pressed:obj.state[event.button].pressed, dirty:true};
   console.log(obj.state)
  };
  obj.onMouseDown = function (event) {
   if (!obj.state[event.button]) obj.state[event.button] = {up: false, down: false, pressed:false, dirty:false};
   obj.state[event.button] = {up: false, down: true, pressed:obj.state[event.button].pressed, dirty:true};
   console.log(obj.state)
  };
  obj.onMouseMove = function(event) {
    obj.lastPosition = obj.position;
    obj.position = {x: event.pageX, y: event.pageY};
  };

  obj.prototype.getMouseMoveDistance = function() {
    return {x: (this.position.x - this.lastPosition.x), y:(this.position.y - this.lastPosition.y)};
  };

  obj.prototype.update = function() {
    for (var button in obj.state) {
      var buttonObj = obj.state[button];
      buttonObj.pressed = (buttonObj.up && buttonObj.dirty);
      buttonObj.dirty = false;
    }
  };
}());
