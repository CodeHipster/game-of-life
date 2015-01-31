# Set lib paths.
require.config
	paths:
		lodash: '../lib/lodash',
		highland: '../lib/highland',
		jquery: '../lib/jquery'

require ['init-page','game-of-life'], (initPage,gameOfLife) ->
	console.log "main"
	initPage.setupPage()
	console.log gameOfLife
	gameOfLife.setupAndRun()
	
	