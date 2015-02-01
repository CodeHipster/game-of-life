define ['grid-tools','game-of-life'], (gridTools,GameOfLife) ->
  moduleName = "game-controller"
  console.log moduleName

todo: give each module a name and append it to the logging. so we can filter

  gameController =
    setupAndRun : () ->
      console.log "setup and run"

      # Fill a set of tiles
      grid = gridTools.getEmptyGrid 3,3

      # Run game of life logic on the grid.
      GameOfLife.doLogic grid
