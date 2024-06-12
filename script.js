let hashiras =["Tengen", "Rengoku", "Mitsuri", "Obanai", "Sanemi", "Muichiro", "Shinobu", "Giyu", "Gyomei"]

let add = prompt('Write name.')

let index = hashiras.indexOf(add);

if(index !== -1) {
    hashiras.splice(index, 1);
} else {
    console.log("Такого имени нет в списке.");
}

console.log(hashiras);