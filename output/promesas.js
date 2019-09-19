"use strict";

var promesa = new Promise(function (resolve, reject) {
  //Asion que se ejecutará.
  //   resolve();
  //   reject();
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve("La operación tuvo exito");
    } else {
      reject("La operación No tuvo exito");
    }
  }, 4000);
});
promesa.then(function (mensaje) {
  alert(mensaje);
});
promesa["catch"](function (mensaje) {
  alert(mensaje);
});