define ['jquery','jq-canvas'], (jquery,jqCanvas)->
	moduleName = "init-page"
	console.log moduleName

	reloadScrollBars = () ->
		document.documentElement.style.overflow = "auto";  # firefox, chrome
		document.body.scroll = "yes"; # ie only

	unloadScrollBars = () ->
		document.documentElement.style.overflow = "hidden";  # firefox, chrome
		document.body.scroll = "no"; # ie only

	console.log moduleName, "Setting up page."
	#full screen canvas.
	# Overwrite the default margin.
	jquery "body"
		.css "margin",0

	# set the canvas width and height
	#TODO: can't we just use the jquery object for this?
	jqCanvas[0].width = window.innerWidth
	jqCanvas[0].height = window.innerHeight - 50

	# Remove the scrollbars.
	unloadScrollBars()

	return true
