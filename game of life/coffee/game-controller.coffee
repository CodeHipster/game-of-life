#TODO: cleanup define includes.
define ['grid','game-of-life','grid-visualizer','timer']
, (grid, GameOfLife, gridVisualizer, timer) ->
  moduleName = "game-controller"
  console.log moduleName

  gameController =
    iterationsPerSecond: 5
    paused: true
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

      renderloop = () ->
        #console.log moduleName, "grid:", grid.front
        gridVisualizer.render grid.front, canvas

      logicloop = () ->
        # Run game of life logic once on the grid.
        GameOfLife.doLogic grid if not gameController.paused

      timer.runAtInterval 200, logicloop

      timer.runAtInterval 33, renderloop

  console.log "gamecontroller:",gameController
  return gameController
