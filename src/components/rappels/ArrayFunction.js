let arrayNumber =  [ 3, 23, 45, 76]

// MAP
const arrayMap = arrayNumber.map((x) => {
    return x*x
})
console.log(arrayMap);
// Création d'un nouveau tableau en affectant un comportement à chaque éléments
// FILTER 
const arrayFilter = arrayNumber.filter((x) => {
     return  x > 10
 })
 console.log(arrayFilter);
//  Creation d'un nouveau tableau en gardant seulement les éléments qui return true
// FIND
const arrayFind = arrayNumber.find((x) => {
    return x > 20
})
console.log(arrayFind); // 23
// retourne le premier element qui remplis la condition
// REDUCE
const arrayReducer = arrayNumber.reduce((accumulator, currentNumber) => {
    return accumulator += currentNumber
})
console.log(arrayReducer);

// Accumation d'une valeur pour chaque element du tableau 
// INCLUDES
let grandChiffre = arrayNumber.includes((x) => {
    x == 76
})

console.log(grandChiffre) // true

// retourne true si le param est inclus dans le tableau 
