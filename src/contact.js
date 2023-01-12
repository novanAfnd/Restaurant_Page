const contactContentContainer = document.createElement("div");
contactContentContainer.className = "contact_content_container";

const contactContentInner = document.createElement("div");
contactContentInner.className = "content_container_inner";
contactContentInner.id = "contact_content_inner"; // to make flex-wrap work

// Header
const contactHeader = document.createElement("div");
contactHeader.className = "content_header";
contactHeader.textContent = "Contact Us";

// Profile card container
const profileContainer = document.createElement("div");
profileContainer.className = "contact_content_profile_container";

export function contactActive() {
  content.appendChild(contactContentContainer);
  contactContentContainer.append(contactContentInner);
  contactContentInner.appendChild(contactHeader);

  // Profile container
  contactContentInner.appendChild(profileContainer);

  // Profile card
  /* Create profile card */
  function createProfileCard(pImage, pName, pRole, pNumber, pEmail) {
    const profileCard = document.createElement("div");
    const profileImage = document.createElement("img");
    const profileName = document.createElement("h4");
    const profileText = document.createElement("p");
    profileCard.className = "contact_content_profile_card";
    profileImage.className = "contact_content_profile_card_image";
    profileImage.id = pImage;
    profileName.className = "contact_content_profile_card_name";
    profileName.textContent = pName;
    profileText.setAttribute("style", "white-space: pre;");
    profileText.textContent = pRole;
    profileText.textContent += pNumber;
    profileText.textContent += pEmail;
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileText);
    return profileCard;
  }

  /* Function to add list to header or footer ul */
  function appendChildren(parent, children) {
    children.forEach(function (child) {
      parent.appendChild(child);
    });
  }

  const profileItems = [
    createProfileCard("profile_dipper", "Dipper", "Chef \r\n", "000-111-111-111 \r\n", "dipper@fake-gggmail \r\n"),
    createProfileCard("profile_wendy", "Wendy", "Manager \r\n", "000-222-222-222 \r\n", "wendy@fake-gggmail \r\n"),
    createProfileCard("profile_mabel", "Mabel", "Waiter \r\n", "000-333-333-333 \r\n", "mabel@fake-gggmail \r\n"),
  ];

  appendChildren(profileContainer, profileItems);
}
