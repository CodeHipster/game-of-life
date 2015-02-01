define ['grid-tools','game-of-life'], (gridTools,GameOfLife) ->
  moduleName = "game-controller"
  console.log moduleName


  gameController =
    setupAndRun : () ->
      console.log moduleName, "setup and run"

      # Fill a set of tiles
      grid = gridTools.getEmptyGrid 3,3

      # Set initial cells
      #[o][x][o]
      #[o][o][x]
      grid[0][0] = true
      grid[2][0] = true
      grid[0][1] = true
      grid[1][1] = true

      console.log moduleName, "grid:", grid
      # Run game of life logic on the grid.
      grid = GameOfLife.doLogic grid
      console.log moduleName, "grid:", grid
      grid = GameOfLife.doLogic grid
      console.log moduleName, "grid:", grid
