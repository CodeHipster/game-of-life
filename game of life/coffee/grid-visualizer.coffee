###
prerequists:  grid cannot be 0 sized.
              grid is rectangular.
###


define ['grid-tools','jquery'], (gridTools, jquery) ->
  moduleName = "grid-visualizer"
  console.log moduleName

  visualizer =
    # render draws the grid on the canvas.
    render: (grid, canvas) ->
      console.log moduleName, canvas

      # get the 2d drawing context from the canvas.
      ctx = canvas.getContext "2d"

      # set draw and fill styles
      ctx.strokeStyle = "#000000"
      ctx.fillStyle = "#ff0000"
      ctx.lineWidth = "2"

      # clear the canvas
      ctx.clearRect 0, 0, canvas.width, canvas.height

      # eventually we want to have it scrollable, but for now just squeeze the grid onto the screen
      gridRatio = grid.length / grid[0].length
      canvasRatio = canvas.width / canvas.height

      if canvasRatio > gridRatio # we want to scale the grid height to match the canvas.height
        console.log moduleName, "canvas relative width is greater than grid relative width"
        tileSize = canvas.height / grid[0].length
      else
        console.log moduleName, "canvas relative width is smaller than grid relative width"
        tileSize = canvas.width / grid.length

      ctx.beginPath()
      console.log moduleName, "tile size: #{tileSize}"
      for column, x in grid
        for cell, y in column
          console.log moduleName, "drawing cell x:#{x}, y:#{y}"
          # draw/'add to path' the bounding box of the cell
          ctx.rect x * tileSize, y * tileSize, tileSize, tileSize
          if cell # if cell is alive
            ctx.fillRect x * tileSize, y * tileSize, tileSize, tileSize
      #stroke the prepared rectangles on the canvas.
      ctx.stroke()

  return visualizer
