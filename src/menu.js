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
      "Nasi Goreng Telur Ceplok - Rp15k",
      "https://riceinfo.com/wp-content/uploads/2022/09/nasi-goreng-recipe.jpg",
      "Nasi goreng is a Southeast Asian fried rice dish, usually cooked with pieces of meat and vegetables."
    ),
    createEverythingInsideFoods(
      "Nasi Goreng Ayam Geprek - Rp20k",
      "https://img.kurio.network/QcOouz8wPgj4U46wpi-6ttfADgw=/320x320/filters:quality(80)/https://kurio-img.kurioapps.com/21/12/17/d6b0125d-cba9-414a-99aa-35cb3cfd83fc.jpe",
      "Fried rice with crispy fried chicken topped with chili sauce."
    ),
    createEverythingInsideFoods(
      "Nasi Goreng Mawut - Rp15k",
      "https://tastynesia.com/wp-content/uploads/2019/12/Resep-Nasi-Goreng-Mawut.jpg",
      "Fried rice mixed with noodles or fried vermicelli. Complete with vegetable toppings and shredded chicken/sausage/meatballs."
    ),
  ];

  appendChildren(subMenuFoods, foodItems);

  // Drinks
  menuContentInner.appendChild(subMenuDrinks);
  const drinkItems = [
    createEverythingInsideFoods(
      "Jus Buah Mangga - Rp10k",
      "https://cdn0-production-images-kly.akamaized.net/4qLTaXdMn0jfg9tV6ZJJp-SKKZ0=/261x0:928x667/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3267542/original/055688000_1602674093-shutterstock_1045397923.jpg",
      "Mango juice is made from ripe mangoes."
    ),
    createEverythingInsideFoods(
      "Teh Susu - Rp10k",
      "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c06eb3cf-f1e1-4e10-8ca0-d80995506e3e_Go-Biz_20200930_152745.jpeg",
      "A mixture of tea and milk in a certain composition. Milk tea is a modern drink that is very popular and this milk tea has its own characteristics in its manufacture, especially in Asia."
    ),
    createEverythingInsideFoods(
      "Es Teh - Rp5k",
      "https://bebekbkb.com/storage/2020/02/es-teh-manis.jpg",
      "A tea drink that is served cold with ice cubes."
    ),
  ];

  appendChildren(subMenuDrinks, drinkItems);

  // Snacks
  menuContentInner.appendChild(subMenuSnacks);
  const snackItems = [
    createEverythingInsideFoods(
      "Usus Krispi - Rp5k",
      "https://paxelmarket.co/wp-content/uploads/2022/01/Screenshot_20220109_173115.png",
      "Usus Krispi is chips made from quality selected raw chicken intestines. These chips are processed using an extraordinary technique that involves a variety of 'Indonesian special' spices to produce chips that are savory, delicious, soft, crunchy like never before."
    ),
    createEverythingInsideFoods(
      "Krupuk Kulit - Rp5k",
      "https://cdn0-production-images-kly.akamaized.net/szcT3TR2gBo-DimULAauJazz6GI=/261x0:4422x4161/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3764835/original/080039900_1640058116-shutterstock_1820787197.jpg",
      "Krupuk kulit is a traditional Indonesian cattle skin krupuk. Traditionally it is made from the soft inner skin of cattle, diced, and sun-dried until it hardens and loses most of its water content."
    ),
  ];

  appendChildren(subMenuSnacks, snackItems);
}
