var button = document.querySelector(".button");
const NombreSaisis = document.querySelector(".Nbr");
const infos = document.querySelector(".infos");

button.onclick = () => {
  if (isNaN(NombreSaisis.value)) {
    infos.textContent = "LE CARACTERE SAISIS N'ES PAS UN NOMBRE";
  } else {
    const nombre = parseInt(NombreSaisis.value);

    function factoriel(nbr) {
      var i, fact;
      fact = 1;
      for (i = 1; i <= nbr; i++) {
        fact = i * fact;
      }
      return fact;
    }

    factoriel(nombre);

    infos.textContent =
      "LE FACTORIEL DU NOMBRE " +
      parseInt(NombreSaisis.value) +
      " EST : " +
      factoriel(nombre);
  }
};

NombreSaisis.addEventListener("keydown", function () {
  if (event.key === "Enter") {
    if (isNaN(NombreSaisis.value)) {
      infos.textContent = "LE CARACTERE SAISIS N'ES PAS UN NOMBRE";
    } else {
      const nombre = parseInt(  NombreSaisis.value);

      function factoriel(nbr) {
        var i, fact;
        fact = 1;
        for (i = 1; i <= nbr; i++) {
          fact = i * fact;
        }
        return fact;
      }

      factoriel(nombre);

      infos.textContent =
        "LE FACTORIEL DU NOMBRE " +
        parseInt(NombreSaisis.value) +
        " EST : " +
        factoriel(nombre);
    }
  }
});

const restart = document.querySelector(".restart");

restart.onclick = () => {
  NombreSaisis.value = "";
  infos.textContent = "";
};


