'use strict';

(function () {
  var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  var getRandomArrayElement = function (arr) {
    var randomElement = Math.floor(Math.random() * arr.length);
    return arr[randomElement];
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (maxElement < arr[i]) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  window.util = {
    getRandomInt,
    getRandomArrayElement,
    getMaxElement,
  };
})();
