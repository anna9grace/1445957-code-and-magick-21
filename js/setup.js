'use strict';

// изменение цветов волшебника и файербола

(function () {
  var setup = document.querySelector(`.setup`);
  var wizardCoat = setup.querySelector(`.wizard-coat`);
  var wizardEyes = setup.querySelector(`.wizard-eyes`);
  var fireball = setup.querySelector(`.setup-fireball-wrap`);
  var FIREBALL_COLORS = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`,
  ];

  var onWizardClick = function (colorArray, property, inputName, evt) {
    var color = window.util.getRandomArrayElement(colorArray);
    evt.target.style[property] = color;
    setup.querySelector(`input[name='${inputName}']`).value = color;
  };

  wizardCoat.addEventListener(`click`, onWizardClick.bind(null, window.wizards.COAT_COLORS, `fill`, `coat-color`));
  wizardEyes.addEventListener(`click`, onWizardClick.bind(null, window.wizards.EYES_COLORS, `fill`, `eyes-color`));
  fireball.addEventListener(`click`, onWizardClick.bind(null, FIREBALL_COLORS, `backgroundColor`, `fireball-color`));
})();
