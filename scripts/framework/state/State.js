define(["HID"], function() {
  window.State = function(appconfig) {
    this.appconfig = appconfig;
    this.hid = new HID();
    this.screenStack = [];
    this.init();
  };
  State.prototype.init = function() {
  }
  State.prototype.updateLoop = function(updateTime) {
    this.hid.update();
    this.update(updateTime);
    this.draw(updateTime);
  }
  State.prototype.update = function(updateTime) {
    for (var i = 0; i < this.screenStack.length; ++i) {
      if (this.screenStack[i] === undefined) continue;
      this.screenStack[i].update(updateTime);
    }
  }
  State.prototype.draw = function(updateTime) {
    for (var i = 0; i < this.screenStack.length; ++i) {
      if (this.screenStack[i] === undefined) continue;
      this.screenStack[i].draw(updateTime);
    }
  }
  State.prototype.addScreen = function(screen) {
    this.screenStack.push(screen);
    return this.screenStack.length;
  }
  State.prototype.removeScreen = function(index) {
    //delete this.screenStack[index];
    this.screenStack.splice(index, 1);
  }

});