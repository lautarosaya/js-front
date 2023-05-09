/* console.log("JS desde Front");
const nombre = "Juana";
console.log(nombre + " sabe JS");

let h1 = document.querySelector("h1");
if (h1 != null) {
  console.log(h1);
}

let h1id = document.querySelector("#title");
if (h1id != null) {
  console.log(h1);
}

let lorem = document.querySelector(".lorem-1");
if (lorem != null) {
  console.log(lorem);
}

let todoslosdiv = document.querySelectorAll("div");
if (todoslosdiv != null) {
  console.log(todoslosdiv);
  todoslosdiv.forEach((div) => {
    if (div == document.querySelector("#segundo")) {
      console.log("Este es el div buscado " + div.id);
    }
  });
} */

/* let navAnchors = document.querySelectorAll("#main-navbar > a");
console.log(navAnchors); */

/* const listItems = document.querySelectorAll("#cont01 > li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains("alert-danger")) {
    listItems[i].classList.remove("alert-danger");
    listItems[i].classList.add("alert-success");
  }
} */

/* CLASE 46 */

/* window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    let errors = [];
    let ul = document.querySelector("div.errores ul");

    for (const iterator of form) {
      if (!iterator.value) {
        errors.push("Tiene que llenar el campo: " + iterator.name);
      } else if (errors.length > 0) {
        event.preventDefault();
        errors.forEach((error) => {
          ul.innerHTML += "<li>" + error + "</li>";
        });
      }
    }
  });
}); */

/* CLASE 47 */

/* La diferencia entre localStorage y seccionStorage en local siguen los datos cuando cerras el navegador y seccion no */

/* window.addEventListener("load", () => {
  if (localStorage.getItem("userName") == null) {
    let nombre = prompt("ingresa tu nombre");
    document.querySelector(".bienvenida").innerHTML = `Hola ${nombre}`;

    localStorage.setItem("userName", nombre);
  } else {
    document.querySelector(
      ".bienvenida"
    ).innerHTML = `Hola ${localStorage.getItem("userName")}`;
  }
}); */

/* Clase en vivo */

/* window.addEventListener("load", () => {
  const list = document.querySelector(".api");

  fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      let personajes = data.results;
      personajes.forEach((personaje) => {
        list.innerHTML += `<li>${personaje.name} / ${personaje.birth_year}</li>`;
      });
    });
}); */

/* window.addEventListener("load", () => {
  const h2 = document.querySelector("h2");
  if (localStorage.getItem("userName") == null) {
    h2.innerHTML = "Hola visitante";
  } else {
    h2.innerHTML = `Hola ${localStorage.getItem("userName")}`;
  }
}); */
