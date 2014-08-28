(function () {
  define(["Keyboard", "Mouse"], function() {
    SSMApp.HID = function() {
      console.log("hid run");
      this.keyboard = new SSMApp.Keyboard();
      this.mouse = new SSMApp.Mouse();
    };
    var obj = SSMApp.HID;
    obj.prototype.update = function() {
      this.keyboard.update();
      this.mouse.update();
    }
  });
}());