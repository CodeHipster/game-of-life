define ['jquery','canvas'], (jquery,canvas)->
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
	# set the canvas width and height.
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	# Remove the scrollbars.
	unloadScrollBars()

	return undefined
