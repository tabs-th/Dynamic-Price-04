let products = [
    {
    name: "Papaya",
    category: "fruit",
    price: 1.49,
    inventory: 35    
},
  {
    name: "Paper Towels",
    category: "groceries",
    price: 1.99,
    inventory: 29   
},
  {
    name: "Speaker",
    category: "electronics",
    price: 98.99,
    inventory: 2    
},
  {
    name: "Polo",
    category: "apparel",
    price: 75,
    inventory: 10  
},
  {
    name: "Broom",
    category: "household",
    price: 8,
    inventory: 12   
}
]

for (const product of products)
    {
    let discount = 0;

    switch (product.category)
     {
        case "apparel":
            discount = 0.15;
            break;
         case "electronics":
            discount = 0.20;
            break;
        case "groceries":
            discount = 0.10;
            break;
        case "household":
            discount = 0.10;
            break;
        default:
            discount = 0
    }
    product.promoPrice = product.price * (1-discount); 
}
console.log (products);

let customerType = "senior"; 
let loyalty = 0;

if (customerType === "student") {
    loyalty = 0.05;
} else if (customerType === "senior") {
    loyalty = 0.07;
} else {
    loyalty = 0;
}

for (let i = 1; i <=3; i++) {
    let product = products[i - 1];

    let finalPrice = product.promoPrice * (1 - loyalty);

    product.inventory -= 1;

    console.log (`Customer ${i} | ` + `Product: ${product.name} | ` + `Total Cost: $${finalPrice.toFixed(2)}`);
}

console.log("Product Details with Discount");
    for (let p in products[2]) {
        console.log(`${p}: ${products [2][p]}`)
    }

console.log("Ending Inventory")
    products.forEach(product => {
        for (const [key, value] of Object.entries(product)) {
            console.log(`${key}: ${value}`);
        }
    })