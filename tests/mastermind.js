var dataprovider = require('nodeunit-dataprovider');

var MastermindModule = require('../src/js/modules/mastermind.js');
var mastermindEngine = new MastermindModule.Engine();
var result;

var dataset = [

{ target: [0], tested: [0], result: { wrong: 0, hits: 1, miss: 0}},
{ target: [0], tested: [1], result: { wrong: 1, hits: 0, miss: 0}},
{ target: [0], tested: [2], result: { wrong: 1, hits: 0, miss: 0}},

{ target: [0, 0], tested: [0, 0], result: { wrong: 0, hits: 2, miss: 0}},
{ target: [0, 0], tested: [0, 1], result: { wrong: 1, hits: 1, miss: 0}},
{ target: [0, 0], tested: [1, 0], result: { wrong: 1, hits: 1, miss: 0}},
{ target: [0, 0], tested: [1, 1], result: { wrong: 2, hits: 0, miss: 0}},

{ target: [0, 0, 0, 0], tested: [0, 0, 0, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 1, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 1, 1, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 0], tested: [0, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 0, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 0, 1, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 0, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 1, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 1, 0, 1], result: { wrong: 3, hits: 1, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 1, 1, 0], result: { wrong: 3, hits: 1, miss: 0}},
{ target: [0, 0, 0, 0], tested: [1, 1, 1, 1], result: { wrong: 4, hits: 0, miss: 0}},

{ target: [0, 0, 0, 1], tested: [0, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 1], tested: [0, 0, 0, 1], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 0, 0, 1], tested: [0, 0, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 0, 1], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 1], tested: [0, 1, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 0, 1], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 1], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 0, 1], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 1], tested: [1, 0, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 0, 1], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 0, 1], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 0, 1], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 1], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 0, 1], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 0, 1], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [0, 0, 0, 1], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [0, 0, 1, 0], tested: [0, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 0], tested: [0, 0, 1, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 0, 1, 0], tested: [0, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 0], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 0], tested: [0, 1, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 0], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 0], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 0], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 0], tested: [1, 0, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 0], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 0], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 0], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 0], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 0], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 0], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [0, 0, 1, 0], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [0, 1, 0, 0], tested: [0, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 0], tested: [0, 1, 0, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 1, 0, 0], tested: [0, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 0], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 0], tested: [0, 0, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 0], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 0], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 0], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 1, 0, 0], tested: [1, 0, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 0], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 0], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 0], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 1, 0, 0], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 0], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 1, 0, 0], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [0, 1, 0, 0], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [1, 0, 0, 0], tested: [0, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 0, 0], tested: [1, 0, 0, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 0, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 1, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [1, 0, 0, 0], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [1, 0, 0, 0], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [0, 0, 1, 1], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 1], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 1], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 1], tested: [0, 0, 1, 1], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 0, 1, 1], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 1], tested: [0, 1, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 1], tested: [0, 1, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 1], tested: [0, 1, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 1], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 1], tested: [1, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 1], tested: [1, 0, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 0, 1, 1], tested: [1, 0, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 1], tested: [1, 1, 0, 0], result: { wrong: 0, hits: 0, miss: 4}},
{ target: [0, 0, 1, 1], tested: [1, 1, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 1], tested: [1, 1, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 1], tested: [1, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},

{ target: [0, 1, 0, 1], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 1, 0, 1], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 1], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 1], tested: [0, 1, 0, 1], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 1, 0, 1], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 1], tested: [0, 1, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 1], tested: [0, 0, 1, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 1], tested: [0, 1, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 1], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 1], tested: [1, 1, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 1], tested: [1, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 0, 1], tested: [1, 1, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 0, 1], tested: [1, 0, 1, 0], result: { wrong: 0, hits: 0, miss: 4}},
{ target: [0, 1, 0, 1], tested: [1, 1, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 1], tested: [1, 0, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 0, 1], tested: [1, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},

{ target: [0, 1, 1, 0], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 1, 1, 0], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 1, 0], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 1, 0], tested: [0, 1, 1, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [0, 1, 1, 0], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 1, 0], tested: [0, 1, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 1, 0], tested: [0, 0, 1, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 1, 0], tested: [0, 1, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 1, 0], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 1, 0], tested: [1, 1, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 1, 0], tested: [1, 0, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [0, 1, 1, 0], tested: [1, 1, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 1, 1, 0], tested: [1, 0, 0, 1], result: { wrong: 0, hits: 0, miss: 4}},
{ target: [0, 1, 1, 0], tested: [1, 1, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 1, 0], tested: [1, 0, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 1, 1, 0], tested: [1, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},

{ target: [1, 0, 1, 0], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [1, 0, 1, 0], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 1, 0], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 1, 0], tested: [1, 0, 1, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [1, 0, 1, 0], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 1, 0], tested: [1, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 1, 0], tested: [0, 0, 1, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 1, 0], tested: [1, 0, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 1, 0], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 1, 0], tested: [1, 1, 0, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 1, 0], tested: [0, 1, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 0, 1, 0], tested: [1, 1, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 0, 1, 0], tested: [0, 1, 0, 1], result: { wrong: 0, hits: 0, miss: 4}},
{ target: [1, 0, 1, 0], tested: [1, 1, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 1, 0], tested: [0, 1, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 0, 1, 0], tested: [1, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},

{ target: [1, 1, 0, 0], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [1, 1, 0, 0], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 1, 0, 0], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 1, 0, 0], tested: [1, 1, 0, 0], result: { wrong: 0, hits: 4, miss: 0}},
{ target: [1, 1, 0, 0], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 1, 0, 0], tested: [1, 0, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 1, 0, 0], tested: [0, 1, 0, 1], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 1, 0, 0], tested: [1, 1, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 1, 0, 0], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 1, 0, 0], tested: [1, 0, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 1, 0, 0], tested: [0, 1, 1, 0], result: { wrong: 0, hits: 2, miss: 2}},
{ target: [1, 1, 0, 0], tested: [1, 1, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [1, 1, 0, 0], tested: [0, 0, 1, 1], result: { wrong: 0, hits: 0, miss: 4}},
{ target: [1, 1, 0, 0], tested: [1, 0, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 1, 0, 0], tested: [0, 1, 1, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [1, 1, 0, 0], tested: [1, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},

{ target: [0, 0, 1, 2], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 2], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 0, 1, 2], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 2], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 1, 2], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 2], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 2], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 0, 1, 2], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 2], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 2], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 1, 2], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 0, 1, 2], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 1, 2], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 0, miss: 3}},
{ target: [0, 0, 1, 2], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [0, 0, 1, 2], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 1, miss: 1}},
{ target: [0, 0, 1, 2], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [0, 0, 2, 1], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 2, 1], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 0, 2, 1], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 2, 1], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 0, 2, 1], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 2, 1], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 2, 1], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 0, 2, 1], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 2, 1], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 2, 1], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 0, 2, 1], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 0, 2, 1], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 0, 2, 1], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 0, miss: 3}},
{ target: [0, 0, 2, 1], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [0, 0, 2, 1], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 1, miss: 1}},
{ target: [0, 0, 2, 1], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [0, 2, 0, 1], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 2, 0, 1], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 2, 0, 1], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 2, 0, 1], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [0, 2, 0, 1], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 2, 0, 1], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 2, 0, 1], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 2, 0, 1], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 2, 0, 1], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 2, 0, 1], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [0, 2, 0, 1], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [0, 2, 0, 1], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [0, 2, 0, 1], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 0, miss: 3}},
{ target: [0, 2, 0, 1], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [0, 2, 0, 1], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 1, miss: 1}},
{ target: [0, 2, 0, 1], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [2, 0, 0, 1], tested: [0, 0, 0, 0], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [2, 0, 0, 1], tested: [1, 0, 0, 0], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [2, 0, 0, 1], tested: [0, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [2, 0, 0, 1], tested: [1, 0, 0, 1], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [2, 0, 0, 1], tested: [0, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [2, 0, 0, 1], tested: [1, 0, 1, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [2, 0, 0, 1], tested: [0, 0, 1, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [2, 0, 0, 1], tested: [1, 0, 1, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [2, 0, 0, 1], tested: [0, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [2, 0, 0, 1], tested: [1, 1, 0, 0], result: { wrong: 1, hits: 1, miss: 2}},
{ target: [2, 0, 0, 1], tested: [0, 1, 0, 1], result: { wrong: 1, hits: 2, miss: 1}},
{ target: [2, 0, 0, 1], tested: [1, 1, 0, 1], result: { wrong: 2, hits: 2, miss: 0}},
{ target: [2, 0, 0, 1], tested: [0, 1, 1, 0], result: { wrong: 1, hits: 0, miss: 3}},
{ target: [2, 0, 0, 1], tested: [1, 1, 1, 0], result: { wrong: 2, hits: 0, miss: 2}},
{ target: [2, 0, 0, 1], tested: [0, 1, 1, 1], result: { wrong: 2, hits: 1, miss: 1}},
{ target: [2, 0, 0, 1], tested: [1, 1, 1, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [2, 2, 2, 1], tested: [0, 1, 1, 0], result: { wrong: 3, hits: 0, miss: 1}},
{ target: [2, 2, 2, 1], tested: [2, 2, 2, 2], result: { wrong: 1, hits: 3, miss: 0}},
{ target: [2, 2, 2, 1], tested: [2, 2, 2, 1], result: { wrong: 3, hits: 1, miss: 0}},

{ target: [2, 4, 2, 3, 7, 1, 8, 8], tested: [3, 2, 1, 1, 7, 3, 8, 7], result: { wrong: 3, hits: 2, miss: 3}}
];

exports['Show valid amount of wrong.'] = dataprovider(
	dataset,
	function (test, data) {
		mastermindEngine.setTarget(data.target);
		
		result = mastermindEngine.evaluate(data.tested);
		test.equal(result.wrong, data.result.wrong);
		test.done();
	});
exports['Show valid amount of miss.'] = dataprovider(
	dataset,
	function (test, data) {
		mastermindEngine.setTarget(data.target);
		
		result = mastermindEngine.evaluate(data.tested);
		test.equal(result.miss, data.result.miss);
		test.done();
	});

exports['Show valid amount of hits.'] = dataprovider(
	dataset,
	function (test, data) {
		mastermindEngine.setTarget(data.target);
		
		result = mastermindEngine.evaluate(data.tested);
		test.equal(result.hits, data.result.hits);
		test.done();
	});

exports['Generate list of integers.'] = function (test) {
	var code = mastermindEngine.generate(5, 3);
	
	test.equal(code.length, 5);
	
	for (var i = 0; i < 5; i++)
	{
		// is int?
		test.ok(Number(code[i]) === code[i] && code[i] % 1 === 0);
	}
	
	test.done();
};