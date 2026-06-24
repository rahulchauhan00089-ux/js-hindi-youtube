const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "supermann","flash"];
   marvel_heroes.push(dc_heroes); 

//    console.log(marvel_heroes);

//  const allheros = marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes];

// console.log(all_new_heroes);
   
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Rahulchauhan"));
console.log(Array.from("Rahulchauhan"));
console.log(Array.from({name: "Rahulchauhan"}))//interesting


