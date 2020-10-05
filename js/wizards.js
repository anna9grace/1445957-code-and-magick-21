'use strict';

(function () {
  var setup = document.querySelector(`.setup`);
  var setupSimilar = setup.querySelector(`.setup-similar`);
  var similarWizardsList = setup.querySelector(`.setup-similar-list`);
  var templateSimilarWizard = document.querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);

  var WIZARDS_LIST_LENGTH = 4;
  var NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  var SECOND_NAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  var EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  var COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`,
  ];


  var getWizardsList = function (names, secondNames, coats, eyes) {
    var similarWizards = [];
    for (var i = 0; i < WIZARDS_LIST_LENGTH; i++) {
      similarWizards[i] = {
        name: window.util.getRandomArrayElement(names) + ` ` + window.util.getRandomArrayElement(secondNames),
        coatColor: window.util.getRandomArrayElement(coats),
        eyesColor: window.util.getRandomArrayElement(eyes),
      };
    }
    return similarWizards;
  };


  var renderWizard = function (wizard) {
    var wizardElement = templateSimilarWizard.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return wizardElement;
  };


  var renderSimilarWizardsList = function () {
    var wizards = getWizardsList(NAMES, SECOND_NAMES, COAT_COLORS, EYES_COLORS);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return similarWizardsList.appendChild(fragment);
  };


  renderSimilarWizardsList();
  setupSimilar.classList.remove(`hidden`);


  window.wizards = {
    EYES_COLORS: EYES_COLORS,
    COAT_COLORS: COAT_COLORS,
  };
})();
