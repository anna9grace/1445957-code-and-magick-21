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

  var showErrorMessage = function (message) {
    var node = document.createElement(`div`);
    node.style.zIndex = `100`;
    node.style.textAlign = `center`;
    node.style.color = `red`;
    node.style.border = `3px solid red`;
    node.style.backgroundColor = `white`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = message;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  var compareWords = function (first, second) {
    if (first > second) {
      return 1;
    } else if (first < second) {
      return -1;
    } else {
      return 0;
    }
  };

  window.util = {
    getRandomInt,
    getRandomArrayElement,
    getMaxElement,
    showErrorMessage,
    compareWords,
  };
})();
