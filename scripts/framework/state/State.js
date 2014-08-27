(function () {
  define(["HID"], function() {
    SSMApp.State = function(appconfig) {
      this.appconfig = appconfig;
      this.hid = new SSMApp.HID();
      this.screenStack = [];
      this.init();
    };
    var obj = SSMApp.State;
    obj.prototype.init = function() {}
    obj.prototype.updateLoop = function(updateTime) {
      this.hid.update();
      this.update(updateTime);
      this.draw(updateTime);
    }
    obj.prototype.update = function(updateTime) {
      for (var i = 0; i < this.screenStack.length; ++i) {
        if (this.screenStack[i] === undefined) continue;
        this.screenStack[i].update(updateTime);
      }
    }
    obj.prototype.draw = function(updateTime) {
      for (var i = 0; i < this.screenStack.length; ++i) {
        if (this.screenStack[i] === undefined) continue;
        this.screenStack[i].draw(updateTime);
      }
    }
    obj.prototype.addScreen = function(screen) {
      this.screenStack.push(screen);
      return this.screenStack.length;
    }
    obj.prototype.removeScreen = function(index) {
      //delete this.screenStack[index];
      this.screenStack.splice(index, 1);
    }
  });
}());