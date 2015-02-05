define(function() {
  var moduleName, timer;
  moduleName = "timer";
  console.log(moduleName);
  return timer = {
    runAtInterval: function(ms, callback) {
      var wrapper;
      console.log(performance.now);
      return wrapper = function(timeStamp) {
        callBack(timeStamp);
        return requestAnimationFrame(wrapper);
      };
    }
  };
});
