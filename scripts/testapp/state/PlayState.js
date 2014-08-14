define(["State", "BackgroundScreen", "TextScreen"], function() {
  window.PlayState = function(canvas, context) {
    State.apply(this, [canvas, context]);
    this.name = "PlayState";
  }
  PlayState.prototype = Object.create(State.prototype);
  PlayState.prototype.init = function() {
    this.addScreen(new BackgroundScreen(this, this.canvas, this.context));
    this.addScreen(new TextScreen(this, this.canvas, this.context));
  }
});
/*
PlayState.prototype.draw = function(updateTime) {
  var context = this.context;
  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height); 
  context.fillStyle = "#000000";
  context.font="20px Georgia";
  var dispTime = parseInt(updateTime, 10);
  context.fillText("Runtime: " + dispTime, 10, 20);
  context.fillText("Keyboard: " + this.hid.keyboard.getState(), 10, 50);
  context.fillText("PlayState", 10, 80);
}*/