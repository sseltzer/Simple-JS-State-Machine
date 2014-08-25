define(["Keyboard"], function() {
  window.HID = function() {
    this.keyboard = new Keyboard();
    //this.mouse = new Mouse();
  };
  HID.prototype.update = function() {
    this.keyboard.update();
  }
});