###
#Grid is represented by a load of tiles.
#Grid is a model independant of representation(however it is visualized).
#Grid is able to give its state (filled squares) as an array. (2 dimensional array containing true or false.)
#Grid is able to fill and unfill tiles based on an array passed to it.
###



define ['jquery', 'grid/tile'], (jquery,Tile) ->
	console.log "grid"

	class Grid
		#Constructor for grid class.
		# x, y are number of tiles.
		constructor: (@width,@height) ->
			console.log "constructing grid"
			
			#The tiles
			@tiles = []			
			for vertCount in [0..@height-1]
				@tiles[vertCount] = []
				for horCount in [0..@width-1]
					@tiles[vertCount][horCount] = new Tile false
		
		setTiles: (tileArray) ->
			console.log "setTiles to be implemented"
			
		getTiles: ()->
			console.log "getTiles to be implemented"
		