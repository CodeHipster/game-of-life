
/*
Note: using implicit initialization of modules. (they are initialized when file is loaded.)
Modules are not classes :)
TODO: make initialization explicit. Then it is easier to see what is going on.
 */
require.config({
  paths: {
    lodash: '../lib/lodash',
    highland: '../lib/highland',
    jquery: '../lib/jquery'
  }
});

require(['init-page', 'game-controller', 'grid-interactor'], function(initPage, gameController, gridInteractor) {
  var moduleName;
  moduleName = "main";
  console.log(moduleName);
  return gameController.setupAndRun();
});
