define ['grid-tools','game-of-life','grid-visualizer','jquery'], (gridTools,GameOfLife,gridVisualizer,jquery) ->
  moduleName = "game-controller"
  console.log moduleName

  gameController =
    setupAndRun : () ->
      console.log moduleName, "setup and run"

      # Fill a set of tiles
      grid = gridTools.getEmptyGrid 3,3
      canvas = jquery '#canvas'

      console.log moduleName, canvas

      # Set initial cells
      #[o][x][o]
      #[o][o][x]
      grid[0][0] = true
      grid[2][0] = true
      grid[0][1] = true
      grid[1][1] = true

      console.log moduleName, "starting grid:", grid

      lifeloop = (timeStamp) ->
        # Run game of life logic once on the grid.
        grid = GameOfLife.doLogic grid
        console.log moduleName, "grid:", grid
        gridVisualizer.render grid, canvas
