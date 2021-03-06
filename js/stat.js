'use strict';

(function () {
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


  var renderPlayersResults = function (ctx, names, times) {
    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
      var currentX = CANVAS_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
      var currentY = CANVAS_Y_BOTTOM - CONTENT_GAP;
      var currentTime = Math.round(times[i]);

      ctx.fillStyle = `#000000`;
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

      ctx.fillStyle = (names[i] === `Вы`) ? `rgba(255, 0, 0, 1)` : `hsl(230, 50%, ${window.util.getRandomInt(100)}%)`;

      ctx.fillRect(
          currentX,
          currentY - CANVAS_FONT,
          BAR_WIDTH,
          currentBarHeight * (-1)
      );
    }
  };


  window.renderStatistics = function (ctx, names, times) {
    renderCloud(
        ctx,
        CANVAS_X + CANVAS_GAP,
        CANVAS_Y + CANVAS_GAP,
        `rgba(0, 0, 0, 0.7)`
    );
    renderCloud(
        ctx,
        CANVAS_X,
        CANVAS_Y,
        `#ffffff`
    );

    ctx.fillStyle = `#000000`;
    ctx.font = `16px PT Mono`;
    ctx.fillText(
        `Ура вы победили!`,
        CANVAS_X + CONTENT_GAP,
        CANVAS_Y + CONTENT_GAP + CANVAS_FONT
    );
    ctx.fillText(
        `Список результатов: `,
        CANVAS_X + CONTENT_GAP,
        CANVAS_Y + CONTENT_GAP + CANVAS_FONT * 2
    );

    renderPlayersResults(ctx, names, times);
  };
})();
