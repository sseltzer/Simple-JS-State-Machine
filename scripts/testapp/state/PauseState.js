define(["State", "PauseBackgroundScreen", "TextScreen"], function() {
  window.PauseState = function(canvas, context) {
    State.apply(this, [canvas, context]);
    this.name = "PauseState";
  }
  PauseState.prototype = Object.create(State.prototype);
  PauseState.prototype.init = function() {
    this.addScreen(new PauseBackgroundScreen(this, this.canvas, this.context));
    this.addScreen(new TextScreen(this, this.canvas, this.context));
  }
});