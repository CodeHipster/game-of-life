require.config({
  paths: {
    lodash: '../lib/lodash',
    highland: '../lib/highland',
    jquery: '../lib/jquery'
  }
});

require(['init-page', 'game-of-life'], function(initPage, gameOfLife) {
  console.log("main");
  initPage.setupPage();
  console.log(gameOfLife);
  return gameOfLife.setupAndRun();
});
