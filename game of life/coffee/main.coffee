# Set lib paths.

# want: pause/play (button)
# 			frameRate (label)
#				make it possible to set grid size (fields)

###
Note: using implicit initialization of modules. (they are initialized when file is loaded.)
Modules are not classes :)
TODO: make initialization explicit. Then it is easier to see what is going on.
###
require.config
	paths:
		lodash: '../lib/lodash',
		highland: '../lib/highland',
		jquery: '../lib/jquery'

require ['init-page','game-controller','grid-interactor'], (initPage,gameController,gridInteractor) ->
	moduleName = "main"
	console.log moduleName

	gameController.setupAndRun()
