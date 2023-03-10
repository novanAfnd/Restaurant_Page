// import
import "./style.css";
import { homeActive } from "./home";
import { menuActive } from "./menu";
import { contactActive } from "./contact";

// Header _____________________________________________________________________________________________________________________________
const mainHeader = document.createElement("header");
mainHeader.className = "header";
const headerNav = document.createElement("nav");
const headerList = document.createElement("ul");
headerList.className = "header_list";

document.body.appendChild(mainHeader);
mainHeader.appendChild(headerNav);
headerNav.appendChild(headerList);

/* Function to create list with class, id and text */
function createHeaderList(liClass, liId, liText) {
  const li = document.createElement("li");
  li.className = liClass;
  li.id = liId;
  li.textContent = liText;
  return li;
}

/* Function to add list to header or footer ul */
//....move below

const HeaderListItems = [
  createHeaderList("header_list_item", "home", "Home"),
  createHeaderList("header_list_item", "menu", "Menu"),
  createHeaderList("header_list_item", "contact", "Contact"),
];

appendChildren(headerList, HeaderListItems);

/* Function switching header list tab */

const headerBtn = headerNav.getElementsByClassName("header_list_item");
console.log(headerBtn);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < headerBtn.length; i++) {
  headerBtn[i].addEventListener("click", function () {
    const current = document.getElementsByClassName("header_list_item-active");

    // If there is no active class, replace "header_list_item-active" to " " (nothing)
    if (current.length > 0) {
      current[0].className = current[0].className.replace("header_list_item-active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " header_list_item-active";

    // jika home button active, maka add home_content_container-active
    if (this.id == "home") {
      console.log("home succesfuly called");
      homeContent.style.display = "block";
      menuContent.style.display = "none";
      contactContent.style.display = "none";
      //homeActive();
      // panggil function home
      //homeContent.style.display = "blok";
    } else if (this.id == "menu") {
      console.log("menu succesfuly called");
      homeContent.style.display = "none";
      menuContent.style.display = "block";
      contactContent.style.display = "none";
      //menuActive();
      // panggil function menu
      //menuContent.style.display = "blok";
    } else if (this.id == "contact") {
      console.log("contact succesfuly called");
      homeContent.style.display = "none";
      menuContent.style.display = "none";
      contactContent.style.display = "block";

      //contactActive();
      // panggil function contact
      //contactContent.style.display = "blok";
    }

    // test
    //console.log(current.length);
    //console.log(this.id);
    //console.log(homeContent);
  });
}

// Content _____________________________________________________________________________________________________________________________
const content = document.createElement("div");
content.className = "content";
content.id = "content";

document.body.appendChild(content);

// panggil fungsi ini dulu
homeActive();
menuActive();
contactActive();

// setelah fungsi dipanggil maka masing-masing elemen konten akan muncul
const homeContent = document.querySelector(".home_content_container");
const menuContent = document.querySelector(".menu_content_container");
const contactContent = document.querySelector(".contact_content_container");

// baru kita tetapkan mau dimunculkan apa tidak
homeContent.style.display = "block";
menuContent.style.display = "none";
contactContent.style.display = "none";

// Footer _____________________________________________________________________________________________________________________________
const mainFooter = document.createElement("footer");
mainFooter.className = "footer";

const footerList = document.createElement("ul");
footerList.className = "footer_list";

document.body.appendChild(mainFooter);
mainFooter.appendChild(footerList);

/* Create list containing anchor(with class, href and text) */
function createAnchorInsideList(aClass, aHref, aText) {
  const li = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.className = aClass;
  anchor.href = aHref;
  anchor.textContent = aText;
  li.appendChild(anchor);
  return li;
}

/* Function to add list to header or footer ul */
function appendChildren(parent, children) {
  children.forEach(function (child) {
    parent.appendChild(child);
  });
}

/* Call createAnchorInsideList above */
const footerListItems = [
  createAnchorInsideList(
    "footer_list_item",
    "https://befonts.com/regattia-typeface.html",
    "Regattia Typeface font designed by Bruno S??ez L??pez - befonts.com"
  ),
  createAnchorInsideList(
    "footer_list_item",
    "https://fonts.google.com/specimen/Roboto",
    "Roboto font designed by Christian Robertson - fonts.google.com"
  ),
  createAnchorInsideList(
    "footer_list_item",
    "https://dribbble.com/shots/17319830-Stadshaven-Brewery-Restaurant-page",
    "Design inspired by Gil - dribbble.com"
  ),
];

/* Call appendChildren above */
appendChildren(footerList, footerListItems);
