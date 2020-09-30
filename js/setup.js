'use strict';

var setup = document.querySelector(`.setup`);
var setupSimilar = setup.querySelector(`.setup-similar`);
var similarWizardsList = setup.querySelector(`.setup-similar-list`);
var templateSimilarWizard = document.querySelector(`#similar-wizard-template`)
  .content.querySelector(`.setup-similar-item`);
var setupOpen = document.querySelector(`.setup-open`);
var setupIcon = document.querySelector(`.setup-open-icon`);
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
var FIREBALL_COLOR = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`,
];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;


var getRandomArrayElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};


var getWizardsList = function (names, secondNames, coats, eyes) {
  var wizardsList = [];
  for (var i = 0; i < WIZARDS_LIST_LENGTH; i++) {
    wizardsList[i] = {
      name: getRandomArrayElement(names) + ` ` + getRandomArrayElement(secondNames),
      coatColor: getRandomArrayElement(coats),
      eyesColor: getRandomArrayElement(eyes),
    };
  }
  return wizardsList;
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

setupIcon.addEventListener(`keydown`, function (evt) {
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


// валидация формы

userNameField.addEventListener(`input`, function () {
  var nameLength = userNameField.value.length;

  if (nameLength < MIN_NAME_LENGTH) {
    userNameField.setCustomValidity(`Слишком короткое имя. Добавьте еще минимум ${MIN_NAME_LENGTH - nameLength} символ`);
  } else if (nameLength > MAX_NAME_LENGTH) {
    userNameField.setCustomValidity(`Слишком длинное имя. ${nameLength - MAX_NAME_LENGTH} лишних символа`);
  } else {
    userNameField.setCustomValidity(``);
  }

  userNameField.reportValidity();
});


// изменение цветов волшебника и файербола

var onWIzardClick = function (colorArray, property, inputName) {
  return function (evt) {
    var color = getRandomArrayElement(colorArray);
    evt.target.style[property] = color;
    setup.querySelector(`input[name='${inputName}']`).value = color;
  };
};

wizardCoat.addEventListener(`click`, onWIzardClick(COAT_COLORS, `fill`, `coat-color`));
wizardEyes.addEventListener(`click`, onWIzardClick(EYES_COLORS, `fill`, `eyes-color`));
fireball.addEventListener(`click`, onWIzardClick(FIREBALL_COLOR, `backgroundColor`, `fireball-color`));
