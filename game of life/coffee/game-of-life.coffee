###
The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

Any live cell with fewer than two live neighbours dies, as if caused by under-population.
Any live cell with two or three live neighbours lives on to the next generation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.
###

###
neighbours:
[0][1][2]
[3][c][4]
[5][6][7]
###
define ['grid-tools'], (gridTools) ->
	moduleName = "game-of-life"
	console.log moduleName

	getCountLivingNeighbours = (neighbours) ->
		#console.log moduleName, "getting count of living neighbours"
		count = 0
		neighbours.forEach (n) ->
			count = count + 1 if n is true
		return count

	gameOfLife =
		#expects a 2 dimensional array with boolean values. With true representing a living cell.
		doLogic: (grid) ->
			#console.log moduleName, "doing logic. on grid:", grid
			# grid.back will contain the new state of the grid.
			# We don't want to change the grid as that will break the logic.
			gridTools.clean grid.back
			for column, x in grid.front # OPTIMIZE decide wether it is more efficient to only look at the live cells and their neighbours then to go through the entire grid.
				for cell, y in column
					#console.log moduleName, "logic for x: #{x} y: #{y}"
					nrNeighbours = gridTools.getNrOfNeighbours grid.front, x, y
					#console.log moduleName, "live neighbours: #{nrNeighbours}"
					if cell # If cell is alive.
						# If cell has less then 2 neighbours it dies from loneliness.
						if nrNeighbours < 2
							grid.back[x][y] = false
							#console.log moduleName, "cell dies"
						# If cell has more then 3 neighbours it dies from over population.
						else if nrNeighbours > 3
							grid.back[x][y] = false
							#console.log moduleName, "cell dies"
						# Implicit, when 2 or 3 it stayes alive.
						else
							grid.back[x][y] = true
							#console.log moduleName, "cell stays alive"
					else # Cell is dead.
						# If 3 living neighbours, cell is revived.
						if nrNeighbours is 3
							grid.back[x][y] = true
							#console.log moduleName, "cell revives"
			gridTools.swap grid
