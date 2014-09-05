(function () {
  SSMApp.Keyboard = function() {
    console.log("Keyboard run");
   document.addEventListener("keydown", SSMApp.Keyboard.onKeyDown, false);
   document.addEventListener("keyup", SSMApp.Keyboard.onKeyUp, false);
  };
  var obj = SSMApp.Keyboard;
  obj.state = {};
  obj.key = {
   8: "Backspace", 9: "Tab",           13: "Enter",      16: "Shift",  17: "Ctrl",
   18: "Alt",      19: "Pause/Break",  20: "Caps Lock",  27: "Esc",    32: "Space",
   33: "Page Up",  34: "Page Down",    35: "End",        36: "Home",   37: "Left",
   38: "Up",       39: "Right",        40: "Down",       45: "Insert", 46: "Delete",
   48: "0", 49: "1", 50: "2", 51: "3", 52: "4",
   53: "5", 54: "6", 55: "7", 56: "8", 57: "9",
   65: "a", 66: "b", 67: "c", 68: "d", 69: "e",
   70: "f", 71: "g", 72: "h", 73: "i", 74: "j",
   75: "k", 76: "l", 77: "m", 78: "n", 79: "o",
   80: "p", 81: "q", 82: "r", 83: "s", 84: "t",
   85: "u", 86: "v", 87: "w", 88: "x", 89: "y",
   90: "z",
   91: "Windows", 93: "Right Click",
   96:  "Numpad 0", 97:  "Numpad 1", 98:  "Numpad 2", 99:  "Numpad 3", 100: "Numpad 4",
   101: "Numpad 5", 102: "Numpad 6", 103: "Numpad 7", 104: "Numpad 8", 105: "Numpad 9",
   106: "Numpad *", 107: "Numpad +", 109: "Numpad -", 110: "Numpad .", 111: "Numpad /",
   112: "F1",  113: "F2", 114: "F3", 115: "F4", 116: "F5",
   117: "F6",  118: "F7", 119: "F8", 120: "F9", 121: "F10",
   122: "F11", 123: "F12",
   144: "Num Lock", 145: "Scroll Lock", 182: "My Computer", 183: "My Calculator",
   186: ";", 187: "=", 188: ",", 189: "-", 190: ".",
   191: "/", 192: "`", 219: "[", 220: "\\", 221: "]",
   222: "'"
  };
  obj.fullScreenReq = false;
  obj.onKeyUp = function (event) {
    if (!obj.state[event.keyCode]) obj.state[event.keyCode] = {up: false, down: false, pressed:false, dirty:false};
    obj.state[event.keyCode] = {up: true, down: false, pressed:obj.state[event.keyCode].pressed, dirty:true};
    if (obj.fullScreenReq) {
      var element = document.documentElement;
      var rfs = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen;
      var rpl = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
      document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock;
      document.exitFullscreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;
      var width, height;
      if (!SSMApp.pointerLock) {
        rfs.call(element);
        rpl.call(element);
        SSMApp.pointerLock = true;
        width = screen.width;
        height = screen.height;
      } else {
        document.exitPointerLock();
        document.exitFullscreen();
        SSMApp.pointerLock = false;
        width = window.innerWidth;
        height = window.innerHeight;
      }
      var camera = window.Application.camera;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      window.Application.renderer.setSize(width, height);
      obj.fullScreenReq = false;
    }
  };
  obj.onKeyDown = function (event) {
    if (!obj.state[event.keyCode]) obj.state[event.keyCode] = {up: false, down: false, pressed:false, dirty:false};
    obj.state[event.keyCode] = {up: false, down: true, pressed:obj.state[event.keyCode].pressed, dirty:true};
  };
  obj.getKeyByValue = function(value) {
    for (var key in obj.key) if (obj.key[key] == value) return key;
  };

  obj.prototype.update = function() {
    for (var key in obj.state) {
      var keyObj = obj.state[key];
      keyObj.pressed = (keyObj.up && keyObj.dirty);
      keyObj.dirty = false;
    }
  };
  obj.prototype.getState = function() {
   var stateStr = "";
   for (var key in obj.state) {
     if (obj.state[key].down === true) stateStr += " " + obj.key[key];
   }
   return stateStr;
  };
  obj.prototype.getKeyByValue = function(value) {
   return obj.getKeyByValue(value);
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
  obj.prototype.requestFullScreen = function() {
    obj.fullScreenReq = true;
  };
}());
