import "./style.css";

const home = document.createElement("div");
home.className = "home";
home.innerHTML = "Hello Webpack";

document.body.appendChild(home);

// if the manual form without the function as above
//..cannot be used for switching to menus and contacts,
//..then the functional form as below is worth a try
/* function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");
  return element;
}

document.body.appendChild(component()); */
