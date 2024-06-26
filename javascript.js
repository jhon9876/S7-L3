fetch("https://striveschool-api.herokuapp.com/books")
  .then((success) => {
    console.log("Andata bene ", success);
    if (success.ok) {
      return success.json();
    } else {
      throw "Errore";
    }
  })
  .then((dati) => {
    console.log(dati);
    const rowElement = document.getElementsByClassName("row")[0];

    dati.forEach((date) => {
      const colElement = document.createElement("div");
      colElement.classList.add("col-4");

      const divCard = document.createElement("div");
      divCard.classList.add("card");

      const imgCard = document.createElement("img");
      imgCard.setAttribute("src", date.img);
      imgCard.classList.add("card-img-top");

      const divBody = document.createElement("div");
      divBody.classList.add("card-body");

      const h5Element = document.createElement("h5");
      h5Element.innerText = `${date.title}`;
      h5Element.classList.add("card-title");

      const pElement = document.createElement("p");
      pElement.innerText = `${date.price}`;
      pElement.classList.add("card-text");

      const buttonElement = document.createElement("button");
      buttonElement.classList.add("btn", "btn-primary");
      buttonElement.innerText = `Scarta`;

      divCard.appendChild(imgCard);
      colElement.appendChild(divCard);
      rowElement.appendChild(colElement);
      divBody.appendChild(h5Element);
      divBody.appendChild(pElement);
      divBody.appendChild(buttonElement);
      divCard.appendChild(divBody);

      buttonElement.addEventListener("click", (event) => {
        event.target.closest(".col-4").remove();
      });
    });
  })

  .catch((error) => {
    console.log("Errore ", error);
  });

const rimuovi = (event) => {
  event.target.closest(".col").remove();
};
