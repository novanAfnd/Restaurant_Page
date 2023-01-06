const contactContentContainer = document.createElement("div");
contactContentContainer.className = "contact_content_container";
contactContentContainer.textContent = "test...contact";

export function contactActive() {
  content.appendChild(contactContentContainer);

  contactContentContainer.style.display = "block";
}
