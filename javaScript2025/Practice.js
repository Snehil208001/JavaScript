/*
Q.2> for a given array with prices of 5 items ->[250,645,300,900,50]
All the items have an offer of 10% OFF on the. Change the array to store final price after
applying offer.
*/

let MRP = [250,645,300,900,50]
let price = 0

for(let i of MRP){
    price += i
}

let Final_Price = price*0.9

console.log("Final price: ", Final_Price);

