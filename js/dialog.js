'use strict';

// Открытие/закрытие окна настройки персонажа:

(function () {
  var setup = document.querySelector(`.setup`);
  var userNameField = setup.querySelector(`.setup-user-name`);
  var setupOpen = document.querySelector(`.setup-open`);
  var setupClose = setup.querySelector(`.setup-close`);
  var setupControl = setup.querySelector(`.upload`);
  var setupDefaultCoords = {};

  var openPopup = function () {
    setup.classList.remove(`hidden`);
    setupDefaultCoords.x = setup.offsetLeft;
    setupDefaultCoords.y = setup.offsetTop;
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  var closePopup = function () {
    setup.style.top = setupDefaultCoords.y + `px`;
    setup.style.left = setupDefaultCoords.x + `px`;
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


  setupControl.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shiftCoords = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setup.style.top = setup.offsetTop - shiftCoords.y + `px`;
      setup.style.left = setup.offsetLeft - shiftCoords.x + `px`;
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mousemove`, onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          setupControl.removeEventListener(`click`, onClickPreventDefault);
        };
        setupControl.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    setupControl.addEventListener(`mouseup`, onMouseUp);
  });
})();
