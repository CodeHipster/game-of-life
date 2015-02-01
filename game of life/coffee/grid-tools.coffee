###
#Grid is represented by a load of tiles.
#Grid is a model independant of representation(however it is visualized).
#Grid is able to give its state (filled squares) as an array. (2 dimensional array containing true or false.)
#Grid is able to fill and unfill tiles based on an array passed to it.
###



define ['jquery'], (jquery) ->
	console.log "grid-tools"

	#help functions

	#Check if the cell is on the edge of the grid.
	isEdgeOfGrid = (grid, x, y) ->
		#Make the neighbours outside of the grid false.
		true if x <= 1 or x >= grid.length-2 or y <= 1 or y >= grid[0].length-2

	grid =
		#Constructor for grid class.
		# x, y are number of tiles.
		getEmptyGrid: (width,height) ->
			console.log "constructing grid"

			#The tiles
			tiles = []
			for x in [0..width-1]
				tiles[x] = []
				for y in [0..height-1]
					tiles[x][y] = false


		###return all 8 neighbours.
		neighbours:
		[0][1][2]
		[3][c][4]
		[5][6][7]
		###
		getNeighbours: (grid, x, y) ->
			console.log "getNeighbours x:#{x} y:#{y} \n\tgrid:", grid
			neighbours = 	[
											grid[x-1]?[y-1],
											grid[x]?[y-1],
											grid[x+1]?[y-1],
											grid[x-1]?[y],
											grid[x+1]?[y],
											grid[x-1]?[y+1],
											grid[x]?[y+1],
											grid[x+1]?[y+1]
										]
			if isEdgeOfGrid grid, x, y
				console.log "on edge of grid x:#{x}, y:#{y} \n\tchecking for undefined in ",neighbours
				for n, index in neighbours
					neighbours[index] = false if n is undefined
				console.log "neighbours: ",neighbours
			return neighbours

		#useless function?
		setNeighbours: (grid, neighbours, x, y) ->
			console.log "setNeighbours"
			#If we are on the edge of the grid we do not want to set the values :)
			#We can use the javascript array to see if we get undefined values.
			#Set these undefined values on the original neighbours array.
			if isEdgeOfGrid grid, x, y
				gridNeighbours = getNeighbours grid, x, y
				gridNeighbours.forEach (nb, index) ->
					neighbours[index] = nb if nb is undefined

			grid[x-1][y-1] = neighbours[0]
			grid[x][y-1] = neighbours[1]
			grid[x+1][y-1] = neighbours[2]
			grid[x-1][y] = neighbours[3]
			grid[x+1][y] = neighbours[4]
			grid[x-1][y+1] = neighbours[5]
			grid[x][y+1] = neighbours[6]
			grid[x+1][y+1] = neighbours[7]
