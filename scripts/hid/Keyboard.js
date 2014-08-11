window.Keyboard = function() {
 document.addEventListener("keydown", Keyboard.onKeyDown, false);
 document.addEventListener("keyup", Keyboard.onKeyUp, false);
};

Keyboard.state = {};
Keyboard.key = {
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

Keyboard.onKeyUp = function (event) {
 if (!Keyboard.state[event.keyCode]) Keyboard.state[event.keyCode] = {up: false, down: false, pressed:false, dirty:false};
 Keyboard.state[event.keyCode] = {up: true, down: false, pressed:Keyboard.state[event.keyCode].pressed, dirty:true};
};
Keyboard.onKeyDown = function (event) {
 if (!Keyboard.state[event.keyCode]) Keyboard.state[event.keyCode] = {up: false, down: false, pressed:false, dirty:false};
 Keyboard.state[event.keyCode] = {up: false, down: true, pressed:Keyboard.state[event.keyCode].pressed, dirty:true};
};
Keyboard.getKeyByValue = function(value) {
 for (var key in Keyboard.key) if (Keyboard.key[key] == value) return key;
};

Keyboard.prototype.update = function() {
 for (var key in Keyboard.state) {
   var keyObj = Keyboard.state[key];
   keyObj.pressed = (keyObj.up && keyObj.dirty);
   keyObj.dirty = false;
 }
};
Keyboard.prototype.getState = function() {
 var stateStr = "";
 for (var key in Keyboard.state) {
   if (Keyboard.state[key].down === true) stateStr += " " + Keyboard.key[key];
 }
 return stateStr;
};
Keyboard.prototype.getKeyByValue = function(value) {
 return Keyboard.getKeyByValue(value);
};

Keyboard.prototype.up = function(value) {
 if (!Keyboard.state[Keyboard.getKeyByValue(value)]) return true;
 return Keyboard.state[Keyboard.getKeyByValue(value)].up;
};
Keyboard.prototype.down = function(value) {
 if (!Keyboard.state[Keyboard.getKeyByValue(value)]) return false;
 return Keyboard.state[Keyboard.getKeyByValue(value)].down;
};
Keyboard.prototype.pressed = function(value) {
 if (!Keyboard.state[Keyboard.getKeyByValue(value)]) return false;
 return Keyboard.state[Keyboard.getKeyByValue(value)].pressed;
};