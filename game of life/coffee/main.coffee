# Set lib paths.

###
Note: using implicit initialization of modules.
Modules are not classes :)
TODO: make initialization explicit. Then it is easier to see what is going on.
###
require.config
	paths:
		lodash: '../lib/lodash',
		highland: '../lib/highland',
		jquery: '../lib/jquery'

require ['init-page','game-controller'], (initPage,gameController) ->
	moduleName = "main"
	console.log moduleName

	gameController.setupAndRun()
