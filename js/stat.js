"use strict";

var CANVAS_HEIGHT = 270;
var CANVAS_WIDTH = 420;
var CANVAS_X = 100;
var CANVAS_Y = 10;
var CANVAS_Y_BOTTOM = CANVAS_Y + CANVAS_HEIGHT;
var CANVAS_GAP = 10;
var CONTENT_GAP = 20;
var CANVAS_FONT = 16;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CANVAS_WIDTH, CANVAS_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};


window.renderStatistics = function (ctx, names, items) {
  renderCloud(
      ctx,
      CANVAS_X + CANVAS_GAP,
      CANVAS_Y + CANVAS_GAP,
      "rgba(0, 0, 0, 0.7)"
  );
  renderCloud(
      ctx,
      CANVAS_X,
      CANVAS_Y,
      "#ffffff"
  );

  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";
  ctx.fillText(
      "Ура вы победили!",
      CANVAS_X + CONTENT_GAP,
      CANVAS_Y + CONTENT_GAP + CANVAS_FONT
  );
  ctx.fillText(
      "Список результатов: ",
      CANVAS_X + CONTENT_GAP,
      CANVAS_Y + CONTENT_GAP + CANVAS_FONT * 2
  );


  var maxTime = getMaxElement(items);

  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = (BAR_HEIGHT * items[i]) / maxTime;
    var currentX = CANVAS_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var currentY = CANVAS_Y_BOTTOM - CONTENT_GAP;
    var currentTime = Math.round(items[i]);

    ctx.fillStyle = "#000000";
    ctx.fillText(
        names[i],
        currentX,
        currentY
    );
    ctx.fillText(
        currentTime,
        currentX,
        currentY - CANVAS_FONT - currentBarHeight - CANVAS_GAP
    );

    ctx.fillStyle = (names[i] === "Вы") ? "rgba(255, 0, 0, 1)" : `hsl(230, 50%, ${getRandomInt(100)}%)`;

    ctx.fillRect(
        currentX,
        currentY - CANVAS_FONT,
        BAR_WIDTH,
        currentBarHeight * (-1)
    );
  }
};
