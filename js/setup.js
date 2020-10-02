'use strict';

var setup = document.querySelector(`.setup`);
var setupSimilar = setup.querySelector(`.setup-similar`);
var similarWizardsList = setup.querySelector(`.setup-similar-list`);
var templateSimilarWizard = document.querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);
var setupOpen = document.querySelector(`.setup-open`);
var setupClose = document.querySelector(`.setup-close`);
var userNameField = setup.querySelector(`.setup-user-name`);
var wizardCoat = setup.querySelector(`.wizard-coat`);
var wizardEyes = setup.querySelector(`.wizard-eyes`);
var fireball = setup.querySelector(`.setup-fireball-wrap`);

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
var FIREBALL_COLORS = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`,
];


var getRandomArrayElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};


var getWizardsList = function (names, secondNames, coats, eyes) {
  var similarWizards = [];
  for (var i = 0; i < WIZARDS_LIST_LENGTH; i++) {
    similarWizards[i] = {
      name: getRandomArrayElement(names) + ` ` + getRandomArrayElement(secondNames),
      coatColor: getRandomArrayElement(coats),
      eyesColor: getRandomArrayElement(eyes),
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


// Открытие/закрытие окна настройки персонажа:


var openPopup = function () {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (userNameField !== document.activeElement && evt.key === `Escape`) {
    closePopup();
  }
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});


// изменение цветов волшебника и файербола

var onWizardClick = function (colorArray, property, inputName, evt) {
  var color = getRandomArrayElement(colorArray);
  evt.target.style[property] = color;
  setup.querySelector(`input[name='${inputName}']`).value = color;
};

wizardCoat.addEventListener(`click`, onWizardClick.bind(null, COAT_COLORS, `fill`, `coat-color`));
wizardEyes.addEventListener(`click`, onWizardClick.bind(null, EYES_COLORS, `fill`, `eyes-color`));
fireball.addEventListener(`click`, onWizardClick.bind(null, FIREBALL_COLORS, `backgroundColor`, `fireball-color`));
