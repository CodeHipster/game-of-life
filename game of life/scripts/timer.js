define([], function() {
  var moduleName, timer;
  moduleName = "timer";
  console.log(moduleName);
  timer = {
    runAtInterval: function(ms, callback) {
      var lastFrameTime, wrapper;
      console.log(performance.now);
      lastFrameTime = 0;
      wrapper = function(timeStamp) {
        if ((timeStamp - lastFrameTime) > ms) {
          lastFrameTime = timeStamp;
          callback(timeStamp);
        }
        return requestAnimationFrame(wrapper);
      };
      return requestAnimationFrame(wrapper);
    }
  };
  return timer;
});
