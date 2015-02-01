require.config({
  paths: {
    lodash: '../lib/lodash',
    highland: '../lib/highland',
    jquery: '../lib/jquery'
  }
});

require(['init-page', 'game-controller'], function(initPage, gameController) {
  console.log("main");
  initPage.setupPage();
  return gameController.setupAndRun();
});
