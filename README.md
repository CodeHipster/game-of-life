##############
#Game of Life#
##############

Goal: being able to draw pixels and start the game of life logic.

Project is purely front-end.

Working with:
-------------
- requirejs
- html5 canvas
- coffee-script (Spare your fingers by writing less ;-P )
- gulp (to watch and compile coffee-script. I know I can just use the coffee command, but wanted to try gulp.)
- node/npm (To manage packages for gulp scripts.)

Project structure:
------------------
- root: project related files
  - git/node modules/gulp script/npm package.json
- ./game of life
  - source code for the webpage

First time setup:
-----------------
- install node: https://docs.npmjs.com/getting-started/installing-node
- install gulp module globally: 
    ```
    npm install --global gulp
    ```
- open terminal/console
- change directory to project root
- type ```npm install``` to tell npm to install all dependencies listed in the package.json

Run the project / start coding:
-------------------------------
- open terminal/console
- change directory to project root
- type ```npm start``` or ```gulp```
