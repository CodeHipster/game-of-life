console.log("main.coffee");

require.config({
  paths: {
    lodash: '../lib/lodash',
    highland: '../lib/highland',
    jquery: '../lib/jquery'
  }
});

require(['init-page'], function(initPage) {
  return initPage.setupPage();
});
