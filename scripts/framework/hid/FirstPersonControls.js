(function () {
  define(["HID"], function() {
    window.FirstPersonControls = function(hid) {
      this.hid = hid;
    };
    FirstPersonControls.prototype.init = function() {};
    FirstPersonControls.prototype.update = function(updateTime) {};
  };
}());