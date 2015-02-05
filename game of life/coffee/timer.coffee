define ()->
  moduleName = "timer"
  console.log moduleName

  timer =
    # run callback at specified interval when possible.
    # if callback takes to long, it runs asap.
    # using window.requestAnimationFrame
    runAtInterval: (ms, callback) ->
      console.log performance.now

      wrapper = (timeStamp)->
        callBack timeStamp
        requestAnimationFrame wrapper
