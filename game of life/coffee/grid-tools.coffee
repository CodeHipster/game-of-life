define ['jquery'], (jquery) ->
	moduleName = "grid-tools"
	console.log moduleName

	##################
	#gridTools object#
	##################

	gridTools =
		# set all cells to false
		# NOTE: cell = false won't work as primitives are not stored as references.
		clean: (grid) ->
			grid.forEach (column) ->
				column.forEach (cell,i) ->
					column[i] = false
			return grid

		swap: (grid) ->
			temp = grid.front
			grid.front = grid.back
			grid.back = temp

		# note that length is 1 higher then the index.
		isWithinGrid: (grid,x,y) ->
			if x >= 0 and x < grid.length and y >= 0 and y < grid[0].length
				return true
			else
				return false

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
