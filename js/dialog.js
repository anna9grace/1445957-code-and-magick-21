'use strict';

// Открытие/закрытие окна настройки персонажа:

(function () {
  var setup = document.querySelector(`.setup`);
  var userNameField = setup.querySelector(`.setup-user-name`);
  var setupOpen = document.querySelector(`.setup-open`);
  var setupClose = document.querySelector(`.setup-close`);

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
})();
