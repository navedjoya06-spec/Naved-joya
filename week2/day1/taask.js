    const car = { brand: "KIA", model: "Seltos",};
const {brand ,model} = car;

console.log(brand); // KIA              
 console.log(model); // 20

// spread

 const fruit = ["apple", "banana", "orange"];
const moreFruits = ["grape", "kiwi", "mango"];
const combined = [...fruit, ...moreFruits];
console.log(combined); 