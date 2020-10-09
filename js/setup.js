'use strict';

// изменение цветов волшебника и файербола

(function () {
  var setup = document.querySelector(`.setup`);
  var setupForm = setup.querySelector(`.setup-wizard-form`);
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
  var EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  var COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`,
  ];

  var onWizardClick = function (colorArray, property, inputName, evt) {
    var color = window.util.getRandomArrayElement(colorArray);
    evt.target.style[property] = color;
    setup.querySelector(`input[name='${inputName}']`).value = color;
  };

  wizardCoat.addEventListener(`click`, onWizardClick.bind(null, COAT_COLORS, `fill`, `coat-color`));
  wizardEyes.addEventListener(`click`, onWizardClick.bind(null, EYES_COLORS, `fill`, `eyes-color`));
  fireball.addEventListener(`click`, onWizardClick.bind(null, FIREBALL_COLORS, `backgroundColor`, `fireball-color`));


  var onSaveSuccess = function () {
    setup.classList.add(`hidden`);
  };

  var onSubmit = function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(setupForm), onSaveSuccess, window.util.showErrorMessage);
  };

  setupForm.addEventListener(`submit`, onSubmit);
})();
