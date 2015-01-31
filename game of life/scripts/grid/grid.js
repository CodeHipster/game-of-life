
/*
 *Grid is represented by a load of tiles.
 *Grid is a model independant of representation(however it is visualized).
 *Grid is able to give its state (filled squares) as an array. (2 dimensional array containing true or false.)
 *Grid is able to fill and unfill tiles based on an array passed to it.
 */
define(['jquery', 'grid/tile'], function(jquery, Tile) {
  var Grid;
  console.log("grid");
  return Grid = (function() {
    function Grid(width, height) {
      var horCount, vertCount, _i, _j, _ref, _ref1;
      this.width = width;
      this.height = height;
      console.log("constructing grid");
      this.tiles = [];
      for (vertCount = _i = 0, _ref = this.height - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; vertCount = 0 <= _ref ? ++_i : --_i) {
        this.tiles[vertCount] = [];
        for (horCount = _j = 0, _ref1 = this.width - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; horCount = 0 <= _ref1 ? ++_j : --_j) {
          this.tiles[vertCount][horCount] = new Tile(false);
        }
      }
    }

    Grid.prototype.setTiles = function(tileArray) {
      return console.log("setTiles to be implemented");
    };

    Grid.prototype.getTiles = function() {
      return console.log("getTiles to be implemented");
    };

    return Grid;

  })();
});
