var fireballSize = 22;

var getFireballSpeed = function (isToLeft) {
  return isToLeft ? 2 : 5;
}

var wizardSpeed = 3;

var wizardWidth = 70;

var getWizardHeight = function () {
  return wizardWidth * 1.337;
}

var getWizardX = function (fieldWidth) {
  return (fieldWidth - wizardWidth) / 2;
}

var getWizardY = function (fieldHeight) {
  return fieldHeight / 3;
}
