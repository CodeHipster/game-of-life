define ['jquery'], (jquery) ->
	moduleName = "grid-tools"
	console.log moduleName

	##################
	#helper functions#
	##################

	#Check if the cell is on the edge of the grid.
	isEdgeOfGrid = (grid, x, y) ->
		#Make the neighbours outside of the grid false.
		true if x <= 1 or x >= grid.length - 2 or y <= 1 or y >= grid[0].length - 2

	##################
	#gridTools object#
	##################

	gridTools =
		getEmptyGrid: (width, height) ->
			#console.log moduleName, "constructing grid"

			# set each cell to be false.
			grid = []
			for x in [0..width - 1]
				grid[x] = []
				for y in [0..height - 1]
					grid[x][y] = false
			return grid

		###return count of alive neighbours.
		neighbours:
		[0][1][2]
		[3][c][4]
		[5][6][7]
		neighbours that fall outside the grid are undefined.
		###
		getNrOfNeighbours: (grid, x, y) ->
			#console.log moduleName, "getNeighbours x:#{x} y:#{y} \n\tgrid:", grid
			neighbours = 	[
											grid[x - 1]?[y - 1],
											grid[x]?[y - 1],
											grid[x + 1]?[y - 1],
											grid[x - 1]?[y],
											grid[x + 1]?[y],
											grid[x - 1]?[y + 1],
											grid[x]?[y + 1],
											grid[x + 1]?[y + 1]
										]
			count = 0
			for n, index in neighbours
				count = count + 1 if n is true
			return count

	return gridTools
