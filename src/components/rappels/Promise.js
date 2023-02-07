let capsuleDispo = false;

let promise = new Promise((resolve, reject) => {
    // ici un code qui va prendre une certaine durée
        if(capsuleDispo) {
            resolve('Voila vos capsules')
        } else {
            reject("Désolé, les capules sont indisponible")
        }

}).then(() => {
  console.log("Je peux avoir une poche avec ? ");
}).catch(() => {
  console.log("Je vais prendre du thé finalement");
}).finally(() => {
  console.log("J'aime le café");
})

// then() -> lorsque ma promesse est resolve, je vais acceder au resulat
// catch() -> lorsque reject, je vais pouvoir recuperer mon erreur
// finally() -> excetute dans tout les cas

console.log(promise)

// resolve(value) : si le code est executé avec succèes, il va 
// me retourné un résultat
// je recevrais mes capsules

// reject(error) : va me retourner une erreur
// une mauvaise nouvelle paiement refusé


