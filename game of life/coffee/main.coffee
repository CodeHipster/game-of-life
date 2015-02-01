# Set lib paths.
require.config
	paths:
		lodash: '../lib/lodash',
		highland: '../lib/highland',
		jquery: '../lib/jquery'

require ['init-page','game-controller'], (initPage,gameController) ->
	moduleName = "main"
	console.log moduleName

	initPage.setupPage()
	gameController.setupAndRun()
