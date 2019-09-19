const promesa = new Promise((resolve, reject) => {
  //Asion que se ejecutará.
  //   resolve();
  //   reject();
  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("La operación tuvo exito");
    } else {
      reject("La operación No tuvo exito");
    }
  }, 4000);
});

promesa.then(mensaje => {
  alert(mensaje);
});

promesa.catch(mensaje => {
  alert(mensaje);
});
