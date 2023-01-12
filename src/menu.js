const menuContentContainer = document.createElement("div");
menuContentContainer.className = "menu_content_container";

const menuContentInner = document.createElement("div");
menuContentInner.className = "content_container_inner";

// Header
const menuHeader = document.createElement("div");
menuHeader.className = "content_header";
menuHeader.textContent = "Menu";

// Submenu Container (Container for each food types)
const subMenuFoods = document.createElement("div");
subMenuFoods.className = "menu_content_submenu_container";
subMenuFoods.id = "submenu_foods";
const subMenuDrinks = document.createElement("div");
subMenuDrinks.className = "menu_content_submenu_container";
subMenuDrinks.id = "submenu_drinks";
const subMenuSnacks = document.createElement("div");
subMenuSnacks.className = "menu_content_submenu_container";
subMenuSnacks.id = "submenu_snacks";

// Submenu Header
const subMenuFoodsHeader = document.createElement("h3");
subMenuFoodsHeader.textContent = "Foods";
subMenuFoods.appendChild(subMenuFoodsHeader);
const subMenuDrinksHeader = document.createElement("h3");
subMenuDrinksHeader.textContent = "Drinks";
subMenuDrinks.appendChild(subMenuDrinksHeader);
const subMenuSnacksHeader = document.createElement("h3");
subMenuSnacksHeader.textContent = "Snacks";
subMenuSnacks.appendChild(subMenuSnacksHeader);

/*
Untuk satu menu makanan/minuman kita butuh container, 
container tersebut nantinya berisi nama makanan + harga, gambar dan text deskripsi makanan/minuman
sehingga kita butuh "div" sebagai container
"h3" sebagai nama makanan + harga, "url image" sebagai gambar dan "p" sebagai deskripsi text
*/

export function menuActive() {
  content.appendChild(menuContentContainer);
  menuContentContainer.appendChild(menuContentInner);
  menuContentInner.appendChild(menuHeader);
  /* 
  Function to add foods/drinks to submenu container
  ...parent sebagai container dan children sebagai element apa yang mau kita masukkan ke container itu
  ...children.forEach(function (child) berarti "setiap children maka diberlakukan function berikut..."
  */
  function appendChildren(parent, children) {
    children.forEach(function (child) {
      parent.appendChild(child);
    });
  }
  // Foods and Drinks function
  function createEverythingInsideFoods(fDName, fDImage, fDText) {
    const foodDrinkContainer = document.createElement("div");
    const foodDrinkName = document.createElement("h4");
    const foodDrinkImage = document.createElement("img");
    const foodDrinkText = document.createElement("p");
    foodDrinkContainer.className = "food-drink_container";
    foodDrinkName.className = "food-drink_name";
    foodDrinkName.textContent = fDName;
    foodDrinkImage.className = "food-drink_image";
    foodDrinkImage.src = fDImage;
    foodDrinkText.textContent = fDText;
    foodDrinkContainer.appendChild(foodDrinkName);
    foodDrinkContainer.appendChild(foodDrinkImage);
    foodDrinkContainer.appendChild(foodDrinkText);
    return foodDrinkContainer;
  }

  // Foods
  menuContentInner.appendChild(subMenuFoods);
  const foodItems = [
    createEverythingInsideFoods(
      "Nasi Goreng - Rp15k",
      "https://images.tokopedia.net/img/JFrBQq/2022/8/9/886e7849-85fb-42c0-95dc-0a1839234615.jpg",
      "Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah bahan-bahan lain seperti telur, daging, seafood, atau sayuran. "
    ),
  ];

  appendChildren(subMenuFoods, foodItems);

  // Drinks
  menuContentInner.appendChild(subMenuDrinks);
  const drinkItems = [
    createEverythingInsideFoods(
      "Jus Buah Mangga - Rp10k",
      "https://cdn0-production-images-kly.akamaized.net/4qLTaXdMn0jfg9tV6ZJJp-SKKZ0=/261x0:928x667/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3267542/original/055688000_1602674093-shutterstock_1045397923.jpg",
      "Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah bahan-bahan lain seperti telur, daging, seafood, atau sayuran. "
    ),
  ];

  appendChildren(subMenuDrinks, drinkItems);

  // Snacks
  menuContentInner.appendChild(subMenuSnacks);
  const snackItems = [
    createEverythingInsideFoods(
      "Usus Krispi - Rp5k",
      "https://paxelmarket.co/wp-content/uploads/2022/01/Screenshot_20220109_173115.png",
      "Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng atau margarin, biasanya ditambah bahan-bahan lain seperti telur, daging, seafood, atau sayuran. "
    ),
  ];

  appendChildren(subMenuSnacks, snackItems);
}
