'use strict';

// https://github.com/dennycd/algorithmbox

var _ = require('lodash');
var distanceCalc = require('../helpers/distance-calc');
var bestSoFar;
var testedSoFar = {};
var distanceGraph = {};

module.exports = function(locations, depot, employees){
  var locationCount = Object.keys(locations).length;
  var locationsPerEmployee = Math.floor(locationCount/employees);
  var leftOverPerEmployee = locationCount%employees;
  var currentResponse = {};
  var allocations = [];

  for(var i = 0; i < employees; i++){
    currentResponse[i]  = {locations:locationsPerEmployee};
    if(leftOverPerEmployee > 0){
      currentResponse[i].locations = currentResponse[i].locations + 1;
      leftOverPerEmployee--;
    }
  }


  for(var i = 0; i < locationCount; i++){
    allocations[i] = Object.keys(locations)[i];
    distanceGraph[Object.keys(locations)[i]] = {};
    for(var j = 0; j < locationCount; j++){
      distanceGraph[Object.keys(locations)[i]][Object.keys(locations)[j]] = distanceCalc(locations[Object.keys(locations)[j]],locations[Object.keys(locations)[i]]);
    }
  }

  // setInterval(randomAllocation(allocations,testedSoFar),50);
  // setInterval(function(){
  //   console.log("Best response so far is:")
  //   console.log(bestResponse)
  // }, 60000)
};

var randomAllocation = function(allocations, testedSoFar){
    var randomAllocation = _.shuffle(allocations);
    if(testedSoFar[JSON.stringify(randomAllocation)] === true){
      // if we've already tested this variation, don't proceed any further
      return;
    } else {
      testedSoFar[JSON.stringify(randomAllocation)] = true;
       
    }
}