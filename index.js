console.clear();
// # :shopping_cart: Mini Online-Shop

// **This exercise covers the JavaScript concepts of classes and instance objects**

// Your task is to create a Product and Cart class representing an online shop.

// ## 1. Product

// Write a `Product` class that should have 2 properties

// - a `name` as a string
// - a `price` as a number

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  containedVat() {
    const taxIncluded = this.price * 0.16;
    return `${taxIncluded.toFixed(2)} € VAT incl.`;
  }
  toText() {
    return `${this.name},${this.price.toFixed(
      2
    )}€ in total. ${this.containedVat()} (16%)`;
  }
}

// The constructor should take 2 parameters initializing those properties. For examples

const tracksuit = new Product("Adidas tracksuit", 150.0);
const shoes = new Product("Puma running shoes", 85.99);
const socks = new Product("Socks set", 4.99);
const pants = new Product("Armani jeans", 90.0);

// The class should also have 2 methods

// - `toText()` - returning a string with the products name, gross price and the contained VAT.
// - `containedVAT()` - returning 16% of the products price as VAT (value-added tax)

console.log(tracksuit.toText()); // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
// console.log(tracksuit.containedVAT()); // 24.00 € VAT incl.

console.log(tracksuit.containedVat());

console.log(shoes.toText());

console.log(socks.toText());

console.log(pants.toText());

console.log(
  "----------------------------------------------------------------------------"
);

// ## 2. Cart

// Write another class `Cart`, which should have one property

// - `products`, an array of products
// On creation of an instance of Cart, there will be no products, so the array is empty. Your constructor will not take in any parameters.

// Create two methods for the Cart class:

// - `addProduct(shoppedProduct)` that takes one parameter
//   - The method should first test, if `shoppedProduct` is an instance of the `Product` class [mdn instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
//   - if `shoppedProduct` is an instance of Product add it to the array of products and returns a string with the amount of products in the cart.
//   - if `shoppedProduct` is not an instance of Product, return a string state that the product is not available in the shop
// - `getProductInfoCart()` that takes no parameters
//   - the method should iterate over the array of products
//   - for every product contained in the list, call the `toText()` method and print them to the console.
// - `getTotalItemsPrice()` that takes no parameters
//   - the method should iterate over the array of products calculating the total price of the items currently in the cart, returning it as a string

class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      return `Your shopping cart contains ${this.products.length} products`;
    } else {
      return `This product is not available`;
    }
  }
  getProductInfoCart() {
    return this.products.forEach((item) => {
      console.log(item.toText());
    });
  }
  getTotalPriceCart() {
    const sum = this.products
      .map((element) => Number(element.price))
      .reduce((acc, curr) => acc + curr, 0);
    return `The total for ${this.products.length} items in your cart amounts to ${sum} €.`;
  }
}
const keyboard = new Product("Korg Kronos 88", 3500.0);

// ## 3. Test your cart with products

// Hint: you might need to use `console.log()` to see what was returned.

// First create an instance of Cart and add your products to your shopping cart. For example:

const cart = new Cart();

console.log(cart.addProduct("potato")); // This is not available in our shop!

console.log(cart.addProduct(tracksuit)); // Your shopping cart now contains 1 products

console.log(cart.addProduct(shoes)); // Your shopping cart now contains 2 products

console.log(cart.addProduct(socks)); // Your shopping cart now contains 3 products

console.log(cart.addProduct(keyboard));

console.log("--------------------------------------------------");

console.log(cart.getProductInfoCart());

console.log(cart.getTotalPriceCart());

// Then call your carts `getProductInfoCart()` and `getTotalItemsPrice()` methods. For example:

// ```js
// cart.getProductInfoCart()
// // Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// // Puma tracksuit 100.00 € in total. 16.00 € VAT incl. (16%).

// cart.getTotalItemsPrice()
// // The total for 2 items in your cart amounts to 249.99 €.
