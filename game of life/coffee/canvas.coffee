# Object containing the canvas.
# canvas could function as a proxy, so other render contexts can be used.

define ['jquery'], (jquery) ->
  moduleName = "canvas"
  console.log moduleName

  canvas = document.getElementById "canvas"

  if canvas.getContext
    context = canvas.getContext '2d'
  else
    throw new Error "canvas context unavailable"
    
  return canvas
