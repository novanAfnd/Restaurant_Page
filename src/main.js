import "./style.css";

// Header
const mainHeader = document.createElement("header");
mainHeader.className = "header";
document.body.appendChild(mainHeader);

const headerNav = document.createElement("nav");
mainHeader.appendChild(headerNav);

const tabList = document.createElement("ul");
tabList.className = "header_tab-list";
headerNav.appendChild(tabList);

const homeLi = document.createElement("li");
homeLi.id = "home";
homeLi.textContent = "Home";
const menuLi = document.createElement("li");
menuLi.id = "menu";
menuLi.textContent = "Menu";
const contactLi = document.createElement("li");
contactLi.id = "contact";
contactLi.textContent = "Cotact";
tabList.appendChild(homeLi);
tabList.appendChild(menuLi);
tabList.appendChild(contactLi);

// Content for home, menu and contact
const content = document.createElement("div");
content.className = "content";
content.innerHTML =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis. Eligendi quia dolorem totam quis autem laboriosamLorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis. Eligendi quia dolorem totam quis autem laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis. Eligendi quia dolorem totam quis autem laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis. Eligendi quia dolorem totam quis autem laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis. Eligendi quia dolorem totam quis autem laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis. Eligendi quia dolorem totam quis autem laboriosam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde numquam expedita, molestiae pariatur odit quaerat omnis cupiditate dignissimos a, dolorum recusandae nobis.";

document.body.appendChild(content);

// Footer
const mainFooter = document.createElement("footer");
mainFooter.className = "footer";
document.body.appendChild(mainFooter);

const footerList = document.createElement("ul");
footerList.className = "footer_list";
mainFooter.appendChild(footerList);

const creditOne = document.createElement("li");
creditOne.id = "credit-one";
creditOne.textContent = "bla bla made by ...";
const creditTwo = document.createElement("li");
creditTwo.id = "credit-two";
creditTwo.textContent = "bla bla made by ...";
const creditThree = document.createElement("li");
creditThree.id = "credit-three";
creditThree.textContent = "bla bla made by ...";
footerList.appendChild(creditOne);
footerList.appendChild(creditTwo);
footerList.appendChild(creditThree);
