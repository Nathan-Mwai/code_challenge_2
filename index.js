// Creates a header element in the html
const header = document.createElement(`header`);
//appends the header to the body element
document.body.append(header);
//creates a h1 element
const h1 = document.createElement(`h1`);
//Assigns h1 a text
h1.textContent = `Mishi Shopping list`;
header.append(h1);

// creates a nav element
const nav = document.createElement(`nav`);
header.append(nav);

// Create the <ul> element for the nav element
const ul = document.createElement("ul");

// Create an array of items to be dispalyed in the navbar
const menuItems = [`Introduction`, `Items`, `Cart`, `contacts`];

// Loop through the menu items and create <li> elements with <a> links
menuItems.forEach((navlink) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${navlink.toLowerCase()}`; 
  // Set the href attribute and sets their valuex to lowercase
  a.textContent = navlink; 
  // Set the link text
  li.appendChild(a); 
  // Append the <a> to the <li>
  ul.appendChild(li);
  // Append the <li> to the <ul>
});

// Append the <ul> to the <nav>
nav.appendChild(ul);

//creates a div element for introdction
const introduction = document.createElement(`div`);
document.body.append(introduction);

//Sets a id attribute to the div element
introduction.setAttribute(`id`, `introduction`);
//creates a h2 element
const h2ForIntroduction = document.createElement(`h2`);
introduction.append(h2ForIntroduction);
h2ForIntroduction.textContent = "Introduction";
const p1 = document.createElement(`p`);
introduction.append(p1);
p1.textContent = `Welcome to Mishi Bakers, where the art of baking comes alive! Our passion lies in creating delectable treats that tantalize your taste buds. As you explore our platform, you’ll discover an array of high-quality raw baking ingredients. Whether you’re a home baker experimenting with new recipes or a professional chef seeking top-notch supplies, we’ve got you covered. From flour to flavor extracts, our offerings cater to both retail customers and wholesale buyers. So, roll up your sleeves, preheat that oven, and let’s embark on a delightful baking journey together`;

const menu = document.createElement(`div`);
document.body.append(menu);

menu.setAttribute(`id`, `items`);
const h2ForMenu = document.createElement(`h2`);
menu.append(h2ForMenu);
h2ForMenu.textContent = `Menu`;

//creates a list of items to be displayed for sale
const listOfItems = [
  { name: `flour`,
    Image: `images/flour.png`,
    price: 100 },
  {
    name: `sugar`,
    Image: `images/sugar.png`,
    price: 200,
    quantity: 100,
  },
  {
    name: `mixer`,
    Image: `images/mixer.jpg`,
    price: `2000`,
    quantity: 100
  },
  {
    name: `eggs`,
    Image: `images/eggs.avif`,
    price: 10,
    quantity: 100,
  },
];


//This is where the items to be displayed are placed
listOfItems.forEach((item) => {
  // the article is where the item will be diplayed
  const article = document.createElement(`article`);
  article.setAttribute(`class`, `products`);

  // the article will have an image within to show how the item looks like
  const img = document.createElement("img");
  img.setAttribute("src", item.Image);
  img.setAttribute("alt", `${item.name} Image`);
  
  // this is where the name of the item will be displayed
  const name = document.createElement(`div`);
  name.setAttribute(`class`, `name`);
  name.textContent = item.name;

  // this is where the price of the item will be displayed
  const price = document.createElement(`div`);
  price.setAttribute(`class`, `price`);
  //when I write item.price I mean the priceof each item to be displayed individually
  price.textContent = `$${item.price}`

  const button = document.createElement(`div`);
  // creates an area for buttons
  
  //this is the button where when clicked it adds items to the cart
  const btnCart = document.createElement(`button`)
  btnCart.setAttribute(`class`,`cart-zone`)
  btnCart.textContent = 'Add to cart';

  article.appendChild(img)
  article.appendChild(name);
  article.appendChild(price);
  article.appendChild(button);
  button.appendChild(btnCart)
  menu.appendChild(article);

  // Event listener for adding items to the cart
  btnCart.addEventListener(`click`, () => {
    //this is the alert button that appears when button has been clicked
    alert(`item added to cart`)
    addItemToCart(item);
    updateCartDisplay();
  });
});
let itemsInCart = [];// this variable will be used when working on the cart section

// Function to add items to the cart
//When button is clicked, the item that has been clicked is pushed to the cart section.
function addItemToCart(item) {
  const existingItem = itemsInCart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
  itemsInCart.push({...item, quantity: 1});
  }
}

// Function to update the cart display
//Since it has been pushed , it will not apMpear just yet. This code helps showing what item has been added to the cart i.e updates the display 
function updateCartDisplay() {
  const cartFile = document.getElementById('file');
  cartFile.innerHTML = ''; // Clear existing content

  //We also have tosee
  let totalPrice = 0;


  //this creates a div element within cart . 
  //This div will take the item name and price.
  // Afterwards it is placed in the div element with the ID of file
  //As for the totalprice which initially was 0, it starts adding the prices within the cart.
  //total price is a resullt of
  itemsInCart.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
    cartFile.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  

  
//creates a subtract button where you can use to subtract items from the cart
  const btnSubtract = document.createElement(`button`);
  btnSubtract.textContent = `-`;
  btnSubtract.addEventListener(`click`, () =>{
    if(item.quantity > 0){
      item.quantity--;
      updateCartDisplay();
    }
  })
  cartItem.append(btnSubtract)
});


  // displays total price of your cart
  const totalElement = document.createElement('div');
  totalElement.textContent = `Total: $${totalPrice}`;
  cartFile.appendChild(totalElement);

  // Creates a button that clears the items listed in the cart area
  const btnClear = document.createElement(`button`);
  btnClear.textContent = `Clear Cart`;
  btnClear.addEventListener(`click`, () => {
    itemsInCart = [],
    updateCartDisplay();
  })
  cartFile.appendChild(btnClear);

  //creates a button where when clicked the the items a purchased.
  const btnTotalPrice = document.createElement('button');
  btnTotalPrice.textContent = 'Purchase';
  btnTotalPrice.addEventListener('click', () => {
    confirm(`Do you have $${totalPrice}`);
    alert(`items purchased`)
  });
  cartFile.appendChild(btnTotalPrice);
}


const storage = document.createElement(`div`);
storage.setAttribute(`id`, `cart`);
const h2Cart = document.createElement(`h2`);
h2Cart.textContent = "My Cart";
const box = document.createElement(`div`);
box.setAttribute(`id`, `file`);
storage.appendChild(h2Cart);
storage.appendChild(box);
document.body.append(storage);
// This area will be for calculating prices and can also be added or removed.
//We can add the alert function to indicate added items or removed items
