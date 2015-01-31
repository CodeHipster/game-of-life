define ['grid/grid'], (Grid) ->
	console.log "game-of-life"
	
	module =
		setupAndRun : () ->
			console.log "setup and run"
			
			# Fill a set of tiles
			grid = new Grid 10,10
			console.log "tiles: ", grid.tiles
			
			
			# Run game of life logic on the grid.
			
	return module 
	