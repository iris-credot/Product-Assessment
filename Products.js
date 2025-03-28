const products = [
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];

// 1.  add a new product 
let newProduct= products.push({ name: "Desk", price: 150, category: "Furniture" });
console.log("Our new array:", products);
// 2. Use find to get the details of the product named "Watch"
const findWatch = products.find(product => product.name === "Watch");
console.log("Watch Details:", findWatch);

// 3. Use map to create a new array of product names only
const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);

// 4. Use filter to get all products that cost more than 100
const expensiveProducts = products.filter(product => product.price > 100);
console.log("Products over $100:", expensiveProducts);

// 5. Use forEach to display each product’s name and price
products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
});

// 6. Use reduce to calculate the total cost of all products in the array
const totalCost = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Cost of All Products: $", totalCost);