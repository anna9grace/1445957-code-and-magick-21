'use strict';

(function () {
  var setup = document.querySelector(`.setup`);
  var setupSimilar = setup.querySelector(`.setup-similar`);
  var similarWizardsList = setup.querySelector(`.setup-similar-list`);
  var templateSimilarWizard = document.querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);
  var WIZARDS_LIST_LENGTH = 4;


  var renderWizard = function (wizard) {
    var wizardElement = templateSimilarWizard.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
    return wizardElement;
  };


  var onLoadSuccess = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARDS_LIST_LENGTH; i++) {
      fragment.appendChild(renderWizard(window.util.getRandomArrayElement(wizards)));
    }
    return similarWizardsList.appendChild(fragment);
  };

  setupSimilar.classList.remove(`hidden`);


  window.backend.load(onLoadSuccess, window.util.showErrorMessage);
})();
