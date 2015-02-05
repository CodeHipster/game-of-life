define [], () ->
  moduleName = "timer"
  console.log moduleName

  timer =
    # run callback at specified interval when possible.
    # if callback takes to long, it runs asap.
    # using window.requestAnimationFrame
    runAtInterval: (ms, callback) ->
      console.log performance.now
      lastFrameTime = 0
      # timeStamp is call moment(of callbacks of requestAnimationFrame)
      #   since program start in ms
      wrapper = (timeStamp)->
        if (timeStamp - lastFrameTime) > ms
          lastFrameTime = timeStamp
          callback timeStamp
        requestAnimationFrame wrapper
      requestAnimationFrame wrapper

  return timer
