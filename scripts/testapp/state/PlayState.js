define(["State", "BackgroundScreen", "TextScreen"], function() {
  window.PlayState = function(canvas, context) {
    State.apply(this, [canvas, context]);
    this.name = "PlayState";
  }
  PlayState.prototype = Object.create(State.prototype);
  PlayState.prototype.init = function() {
    this.addScreen(new PlayScreen(this, this.canvas, this.context));
  }
});