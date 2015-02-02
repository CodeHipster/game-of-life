define ['grid-tools','game-of-life','grid-visualizer','jquery'], (gridTools,GameOfLife,gridVisualizer,jquery) ->
  moduleName = "game-controller"
  console.log moduleName

  gameController =
    setupAndRun : () ->
      console.log moduleName, "setup and run"

      # Fill a set of tiles
      grid = gridTools.getEmptyGrid 50,50
      canvas = jquery('#canvas')[0]

      console.log moduleName, canvas

      # Set initial cells
      #[x][x][o]
      #[o][x][o]
      #[x][o][o]
      grid[2][0] = true
      grid[0][1] = true
      grid[2][1] = true
      grid[1][2] = true
      grid[2][2] = true

      console.log moduleName, "starting grid:", grid

      lifeloop = () ->
        # Run game of life logic once on the grid.
        grid = GameOfLife.doLogic grid
        console.log moduleName, "grid:", grid
        gridVisualizer.render grid, canvas
        requestAnimationFrame lifeloop

      requestAnimationFrame lifeloop
