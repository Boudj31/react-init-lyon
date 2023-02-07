const tableau = ["un", "deux", "trois"]
const [nombre1, nombre2, nombre3] = tableau

const nombre1 = tableau[0]

const [nombre1, ...reste] = tableau
console.log(nombre1); // "un" 
console.log(reste); // ["deux", "trois"]

const tableau2 = [...tableau, "quatre"]
console.log(tableau2); // ["un", "deux", "trois", "quatre"]


