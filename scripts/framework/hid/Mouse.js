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

  obj.onMouseUpEvents = [];
  obj.state = {};
  obj.key = {
   0: "LMB",
   1: "MMB",
   2: "RMB"
  };
  obj.fullScreenReq = false;
  obj.onMouseUp = function (event) {
   if (!obj.state[event.button]) obj.state[event.button] = {up: false, down: false, pressed:false, dirty:false};
   obj.state[event.button] = {up: true, down: false, pressed:obj.state[event.button].pressed, dirty:true};
   obj.callEvents(obj.onMouseUpEvents, event);
   if (obj.fullScreenReq) {
    var element = document.documentElement;
    var rfs = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen;
    rfs.call(element);
    var rpl = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    rpl.call(element);
    obj.fullScreenReq = false;
   }
  };
  obj.onMouseDown = function (event) {
   if (!obj.state[event.button]) obj.state[event.button] = {up: false, down: false, pressed:false, dirty:false};
   obj.state[event.button] = {up: false, down: true, pressed:obj.state[event.button].pressed, dirty:true};
  };
  obj.getKeyByValue = function(value) {
   for (var key in obj.key) if (obj.key[key] == value) return key;
  };
  obj.prototype.up = function(value) {
   if (!obj.state[obj.getKeyByValue(value)]) return true;
   return obj.state[obj.getKeyByValue(value)].up;
  };
  obj.prototype.down = function(value) {
   if (!obj.state[obj.getKeyByValue(value)]) return false;
   return obj.state[obj.getKeyByValue(value)].down;
  };
  obj.prototype.pressed = function(value) {
   if (!obj.state[obj.getKeyByValue(value)]) return false;
   return obj.state[obj.getKeyByValue(value)].pressed;
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

  obj.prototype.addOnMouseUpEvent = function(callback) {
    obj.onMouseUpEvents.push(callback);
    console.log(obj.onMouseUpEvents)
    return obj.onMouseUpEvents.length;
  };
  obj.prototype.removeOnMouseUpEvent = function(index) {
    obj.onMouseUpEvents.splice(index, 1);
  }
  obj.callEvents = function(events, event) {
    for (var i = 0; i < events.length; ++i) {
      if (events[i] === undefined) continue;
      events[i].call(event, event);
    }
  };
  obj.prototype.requestFullScreen = function() {
    obj.fullScreenReq = true;
  };
}());
