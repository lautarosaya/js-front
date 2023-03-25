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

const listItems = document.querySelectorAll("#cont01 > li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  if (listItems[i].classList.contains("alert-danger")) {
    listItems[i].classList.remove("alert-danger");
    listItems[i].classList.add("alert-success");
  }
}
