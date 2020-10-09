'use strict';

(function () {
  var StatusCode = {
    OK: 200,
  };

  var load = function (onLoad, onError) {
    var URL = `https://21.javascript.pages.academy/code-and-magick/data`;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener(`load`, function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.open(`GET`, URL);
    xhr.send();
  };


  var save = function (data, onLoad, onError) {
    var URL = `https://21.javascript.pages.academy/code-and-magick`;
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener(`load`, function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.open(`POST`, URL);
    xhr.send(data);
  };

  window.backend = {
    load,
    save,
  };
})();
