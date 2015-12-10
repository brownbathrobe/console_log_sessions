'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var turns = 50;
var pieces = ['O', 'I', 'S', 'Z', 'L', 'J', 'T'];

var drawOne = function drawOne(bag) {
  var piece = bag[Math.round(Math.random() * (bag.length - 1))];
  var index = bag.indexOf(piece);
  var remaining = [].concat(_toConsumableArray(bag.slice(0, index)), _toConsumableArray(bag.slice(index + 1)));
  return { piece: piece, remaining: remaining };
};

var draw = function draw(_x4) {
  var _arguments = arguments;
  var _again = true;

  _function: while (_again) {
    var turns = _x4;
    bag = hand = _drawOne = piece = remaining = undefined;
    var bag = _arguments.length <= 1 || _arguments[1] === undefined ? [] : _arguments[1];
    _again = false;
    var hand = _arguments.length <= 2 || _arguments[2] === undefined ? '' : _arguments[2];

    if (turns > 0) {
      var _drawOne = drawOne(bag.length ? bag : pieces);

      var piece = _drawOne.piece;
      var remaining = _drawOne.remaining;
      _arguments = [_x4 = turns - 1, remaining, hand + piece];
      _again = true;
      continue _function;
    }

    return hand;
  }
};

var createBorder = function createBorder(length) {
  var character = arguments.length <= 1 || arguments[1] === undefined ? '-' : arguments[1];

  var helper = function helper(length) {
    return length ? character + helper(length - 1) : '';
  };
  return helper(length);
};

var border = createBorder(turns, '=');

var log = function log(message) {
  return process.stdout.write(message + '\n');
};

log(border);
log(draw(turns));
log(border);
