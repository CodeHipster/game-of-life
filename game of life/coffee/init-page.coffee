define ['jquery'], (jquery)->

	reloadScrollBars = () ->
		document.documentElement.style.overflow = "auto";  # firefox, chrome
		document.body.scroll = "yes"; # ie only
		
	unloadScrollBars = () ->
		document.documentElement.style.overflow = "hidden";  # firefox, chrome
		document.body.scroll = "no"; # ie only

	return setupPage: ()->
		console.log "Setting up page."
		#full screen canvas.
		# Overwrite the default margin.
		jquery("body").css("margin",0);
		canvas = document.getElementById "canvas"
		# set the canvas width and height.
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight 
		
		# Remove the scrollbars.
		unloadScrollBars()
		
		if canvas.getContext 
			context = canvas.getContext '2d'
			context.fillStyle	= '#00ff00'
			context.strokeStyle	= '#ff0000'
			context.lineWidth	= 1
			context.font		= "16px Arial"
		else 
			throw new Error("canvas context unavailable");
