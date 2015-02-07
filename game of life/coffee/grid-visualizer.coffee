###
prerequists:  grid cannot be 0 sized.
        grid is rectangular.
###


define ['grid-tools','jquery','canvas','grid'], (gridTools, jquery, canvas, grid) ->
  moduleName = "grid-visualizer"
  console.log moduleName

  visualizer =
    cellSize: null
    context: null
    hoverOverCell: null

    # calculate which tile(x,y) the pixel x,y refers to
    getCellFromPixels: (x,y) ->
      tx = Math.floor(x / cellSize)
      ty = Math.floor(y / cellSize)
      return x:tx, y:ty

    # render draws the grid on the canvas.
    #todo rename grid as it is not the grid object....
    render: (grid) ->
      # clear the canvas
      @context.clearRect 0, 0, canvas.width, canvas.height
      # set draw and fill styles
      @context.strokeStyle = "#000000"
      @context.fillStyle = "#ff0000"
      @context.lineWidth = "2"
      @context.beginPath()
      #console.log moduleName, "tile size: #{cellSize}"
      for column, x in grid
        for cell, y in column
          #console.log moduleName, "drawing cell x:#{x}, y:#{y}"
          # add to draw queue the bounding box of the cell
          @context.rect x * @cellSize, y * @cellSize, @cellSize, @cellSize
          if cell # if cell is alive
            @context.fillRect x * @cellSize, y * @cellSize, @cellSize, @cellSize
      #draw the hoverOverCell
      hover = @hoverOverCell
      if hover and gridTools.isWithinGrid grid, hover.x, hover.y
        if grid[hover.x][hover.y]
          @context.fillStyle = "#FFE0E0"
        else
          @context.fillStyle = "#D10000"
        @context.fillRect hover.x * @cellSize, hover.y * @cellSize, @cellSize, @cellSize
      #stroke the prepared rectangles on the canvas.
      @context.stroke()

  ##INITIALIZATION CODE

  # get the 2d drawing context from the canvas.
  ctx = canvas.getContext "2d"
  visualizer.context = ctx

  # eventually we want to have it scrollable, but for now just squeeze the grid onto the screen
  gridRatio = grid.front.length / grid.front[0].length
  canvasRatio = canvas.width / canvas.height
  if canvasRatio > gridRatio # we want to scale the grid height to match the canvas.height
    #console.log moduleName, "canvas relative width is greater than grid relative width"
    cellSize = canvas.height / grid.front[0].length
  else
    #console.log moduleName, "canvas relative width is smaller than grid relative width"
    cellSize = canvas.width / grid.front.length

  console.log cellSize, canvas.width, canvas.height
  visualizer.cellSize = cellSize

  return visualizer
