#TODO: cleanup define includes.
define ['grid','game-of-life','grid-visualizer','grid-interactor','timer']
, (grid, GameOfLife, gridVisualizer, gridInteractor, timer) ->
  moduleName = "game-controller"
  console.log moduleName

  gameController =
    iterationsPerSecond: 5
    setupAndRun : () ->
      console.log moduleName, "setup and run"

      # Set initial cells TEMP
      #[x][x][o]
      #[o][x][o]
      #[x][o][o]
      grid.front[2][0] = true
      grid.front[0][1] = true
      grid.front[2][1] = true
      grid.front[1][2] = true
      grid.front[2][2] = true

      console.log moduleName, "starting grid:", grid.front

      lifeloop = () ->
        #console.log moduleName, "grid:", grid.front
        gridVisualizer.render grid.front, canvas
        # Run game of life logic once on the grid.
        GameOfLife.doLogic grid

      timer.runAtInterval 200, lifeloop
