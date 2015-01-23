console.log "main.coffee"


# Set lib paths.
require.config
	paths:
		lodash: '../lib/lodash',
		highland: '../lib/highland',
		jquery: '../lib/jquery'

require ['init-page'], (initPage) ->
	initPage.setupPage()