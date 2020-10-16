'use strict';

(function () {
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === window.setup.currentCoatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.setup.currentEyesColor) {
      rank += 1;
    }
    return rank;
  };


  var updateWizards = function () {
    window.wizards.renderWizards(wizards.sort(function (left, right) {
      var rankDifference = getRank(right) - getRank(left);

      if (rankDifference === 0) {
        rankDifference = window.util.compareWords(left.name, right.name);
      }
      return rankDifference;
    }));
  };


  var onLoadSuccess = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(onLoadSuccess, window.util.onDataLoadError);


  window.similars = {
    updateWizards,
  };
})();
