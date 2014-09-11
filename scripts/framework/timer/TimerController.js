/**
 * Created by sseltzer on 12/20/13.
 */

TimerController = function() {
  console.log("Initializing TimerController");
};
TimerController.timers = {};
TimerController.timerInc = 0;
TimerController.prototype.add = function(callback, interval) {
  TimerController.timers[TimerController.timerInc] = {callback:callback, interval:interval, intervalTime:0, lastUpdateTime:0};
  return TimerController.timerInc++;
};
TimerController.prototype.remove = function(timerInc) {
  delete TimerController.timers[timerInc];
};

TimerController.prototype.update = function(updateTime) {
  for (var timerInc in TimerController.timers) {
    var timer = TimerController.timers[timerInc];
    var elapsedTime = updateTime - timer.lastUpdateTime;
    timer.lastUpdateTime = updateTime;
    timer.intervalTime += elapsedTime;
    if (timer.intervalTime > timer.interval) {
      timer.intervalTime = 0;
      timer.callback();
    }
  }
};