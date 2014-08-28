(function () {
  SSMApp.Mouse = function() {
    console.log("Mouse run");
    document.addEventListener("mouseup", SSMApp.Mouse.onMouseUp, false);
    document.addEventListener("mousedown", SSMApp.Mouse.onMouseDown, false);
    document.addEventListener("mousemove", SSMApp.Mouse.onMouseMove, false);
    SSMApp.Mouse.lastPosition = {x: 0, y: 0};
    SSMApp.Mouse.position = {x: 0, y: 0};
  };
  var obj = SSMApp.Mouse;

  obj.state = {};
  obj.onMouseUp = function (event) {
   if (!obj.state[event.button]) obj.state[event.button] = {up: false, down: false, pressed:false, dirty:false};
   obj.state[event.button] = {up: true, down: false, pressed:obj.state[event.button].pressed, dirty:true};
   console.log(obj.state)
         var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
      var body = document.getElementsByTagName('body')[0];
      body.requestPointerLock =  body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;
      body.requestPointerLock()
;  };
  obj.onMouseDown = function (event) {
   if (!obj.state[event.button]) obj.state[event.button] = {up: false, down: false, pressed:false, dirty:false};
   obj.state[event.button] = {up: false, down: true, pressed:obj.state[event.button].pressed, dirty:true};
   console.log(obj.state)
  };
  obj.onMouseMove = function(event) {
    SSMApp.Mouse.lastPosition = SSMApp.Mouse.position;
    SSMApp.Mouse.position = {x: event.pageX, y: event.pageY};
  };

  obj.prototype.getMouseMoveDistance = function() {
    return {x: (obj.position.x - obj.lastPosition.x), y:(obj.position.y - obj.lastPosition.y)};
  };

  obj.prototype.update = function() {
    for (var button in obj.state) {
      var buttonObj = obj.state[button];
      buttonObj.pressed = (buttonObj.up && buttonObj.dirty);
      buttonObj.dirty = false;
    }
  };
}());
