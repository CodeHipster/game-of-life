###
prerequists:  grid cannot be 0 sized.
              grid is rectangular.
###


define ['grid-tools','jquery','canvas','grid'], (gridTools, jquery, canvas, grid) ->
  moduleName = "grid-visualizer"
  console.log moduleName

  visualizer =
    tileSize: null
    context: null
    # render draws the grid on the canvas.
    render: (grid) ->
      #console.log moduleName, canvas

      # clear the canvas
      @context.clearRect 0, 0, canvas.width, canvas.height

      # set draw and fill styles
      @context.strokeStyle = "#000000"
      @context.fillStyle = "#ff0000"
      @context.lineWidth = "2"
      @context.beginPath()
      #console.log moduleName, "tile size: #{tileSize}"
      for column, x in grid
        for cell, y in column
          #console.log moduleName, "drawing cell x:#{x}, y:#{y}"
          # draw/'add to path' the bounding box of the cell
          @context.rect x * @tileSize, y * @tileSize, @tileSize, @tileSize
          if cell # if cell is alive
            @context.fillRect x * @tileSize, y * @tileSize, @tileSize, @tileSize
      #stroke the prepared rectangles on the canvas.
      @context.stroke()

  ##INITIALIZATION CODE

  # get the 2d drawing context from the canvas.
  ctx = canvas.getContext "2d"
  visualizer.context = ctx

  # eventually we want to have it scrollable, but for now just squeeze the grid onto the screen
  gridRatio = grid.grid.length / grid.grid[0].length
  canvasRatio = canvas.width / canvas.height
  if canvasRatio > gridRatio # we want to scale the grid height to match the canvas.height
    #console.log moduleName, "canvas relative width is greater than grid relative width"
    tileSize = canvas.height / grid.grid[0].length
  else
    #console.log moduleName, "canvas relative width is smaller than grid relative width"
    tileSize = canvas.width / grid.grid.length

  visualizer.tileSize = tileSize

  return visualizer
