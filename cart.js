///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

let initialValue = 0;

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue
);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
  tax *= cartTotal;
  cartTotal += tax;
  cartTotal -= couponValue;
  let finalAmount = cartTotal;
  return finalAmount;
}
console.log(calcFinalPrice(100, 5, 0.1));
console.log(calcFinalPrice(100, 10, 0.1));
console.log(calcFinalPrice(100, 1, 0.05));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
const restaruantCartPageExample = {
  name: "This will be a string since names are used with strings",
  email:
    "this will be a string because it will be a combo of letters and numbers",
  age: "Number, age is used with number value. Important to know the age for marketing",
  address: "String, easier to put numbers and letters into the string value",
  favorites: [
    "will be an array to hold their favorite orders if they have multiple",
  ],
};
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const jaredCartPage = {
  name: "Jared 'The overlord' Collir",
  email: "jaredOL@impostersyndrom.com",
  age: 42, // LOL
  address: "43110 miracle way, Shire, Middle Earth, 11111",
  favorites: [
    "plain sandwich",
    "water with a hint of lemon",
    "coding noobs for breakfast",
  ],
};
console.log(jaredCartPage);