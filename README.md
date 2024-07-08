
# Code_Challenge_2

This code is use to show items that are in store and what can be purchased.
It also shows the prices of each item and as you continue adding items to the cart it calculates the total amount.

#### NB: My code works like an online shop. This means that only items present in the menu can be used to see how the cart works.



## Getting Started

First, **fork and clone** this challenge into your local
environment. Navigate into its directory in the terminal, then run `code .` to
open the files in Visual Studio Code.
    
## Buttons in The menu

- Buttons where customer can add items
- The customer has to continously press **add to cart** button so as to add multiple items of the same kind.

## Buttons in the Cart 
- There are three buttons in the cart section.
1. ### Purchase button
- This button allows one to purchase the items that one has selected to putinto the cart.
- It looks like this
```js
const btnTotalPrice = document.createElement('button');
  btnTotalPrice.textContent = 'Purchase';
  btnTotalPrice.addEventListener('click', () => {
    confirm(`Do you have $${totalPrice}`);
    alert(`items purchased`)
  });
  cartFile.appendChild(btnTotalPrice);
```

2. ### Clear button
 - This button clears the cart.
 - It looks like this
 ```js
 const btnClear = document.createElement(`button`);
  btnClear.textContent = `Clear Cart`;
  btnClear.addEventListener(`click`, () => {
    itemsInCart = [],
    updateCartDisplay();
  })
  cartFile.appendChild(btnClear);
 ```

3. ### Reduce button 
  - This button reduces the number of similar items selected
    ````html
    <button> - </button>
    ````
    - From the inspect area, it look like this but from javascript the code is 
    ```js
    const btnSubtract = document.createElement(`button`)
    btnSubtract.textContent = `-`;
    btnSubtract.addEventListener(`click`, () =>{
    if(item.quantity > 0){
      item.quantity--;
      updateCartDisplay();
    }
    })
    cartItem.append(btnSubtract);
    ```
## Conclusion

In this challenge, I was suppose to:

- Array: Maintain a JavaScript array to store shopping list items.
```js
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
```
- Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
```
This part can be referenced at the buttons section
```

- Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
```js
function addItemToCart(item) {
  const existingItem = itemsInCart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
  itemsInCart.push({...item, quantity: 1});
  }
}
```
- Attach event listeners to the "Add" button to capture user input and add items to the list.
```
This part can be found in the Buttons section 
```
- Attach event listeners to the list of items to allow users to mark them as purchased.
```
This action can only be done once all items needed are selected
Also, one can select similar items and price increases as one does so 
```
- Attach an event listener to the "Clear List" button to remove all items from the list.
```
This part can be found in the Buttons section 
```






## ACCESS TO WEBSITES
[GITHUB](https://github.com/Nathan-Mwai)

[LiNK TO WEBSITE](https://nathan-mwai.github.io/code_challenge_2/)



## Acknowledgements

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)

