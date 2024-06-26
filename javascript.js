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
    const listaLibriComprati = [];
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

      const buttonElementRemove = document.createElement("button");
      buttonElementRemove.classList.add("btn", "btn-danger");
      buttonElementRemove.innerText = `Scarta`;

      const buttonElementAdd = document.createElement("button");
      buttonElementAdd.classList.add("btn", "btn-primary");
      buttonElementAdd.innerText = `Compra ora`;

      const buttonRemoveFromChart = document.createElement("button");
      buttonRemoveFromChart.classList.add("btn", "btn-primary");
      buttonRemoveFromChart.innerText = `Rimuovi dal carrello`;

      divCard.appendChild(imgCard);
      colElement.appendChild(divCard);
      rowElement.appendChild(colElement);
      divBody.appendChild(h5Element);
      divBody.appendChild(pElement);
      divBody.appendChild(buttonElementRemove);
      divBody.appendChild(buttonElementAdd);
      divBody.appendChild(buttonRemoveFromChart);
      divCard.appendChild(divBody);

      buttonElementRemove.addEventListener("click", (event) => {
        event.target.closest(".col-4").remove();
      });

      buttonElementAdd.addEventListener("click", (event) => {
        const ulElement = document.getElementsByTagName("ul")[0];
        console.log(ulElement);
        const liElement = document.createElement("li");
        liElement.innerText = date.title;
        ulElement.appendChild(liElement);
        listaLibriComprati.push(date.title);
        // console.log(listaLibriComprati);

        const objToString = JSON.stringify(listaLibriComprati);
        localStorage.setItem("listaLibriComprati", objToString);
      });

      //   buttonRemoveFromChart.addEventListener("click", (event) => {
      //     const listStorage = localStorage.getItem("listaLibriComprati");
      //     // console.log(listStorage);
      //     const StringToObj = JSON.parse(listStorage);
      //     console.log(StringToObj);
      //     for (let i = 0; i < StringToObj.length; i++) {
      //       if (StringToObj[i] == date.title) {
      //         StringToObj.splice(i, 1);
      //         listaLibriComprati[i] = StringToObj[i];
      //       }
      //     }
      //     console.log(StringToObj);
      //     // const objToString = JSON.stringify(listaLibriComprati);
      //   });
    });
  })

  .catch((error) => {
    console.log("Errore ", error);
  });

const rimuovi = (event) => {
  event.target.closest(".col").remove();
};
