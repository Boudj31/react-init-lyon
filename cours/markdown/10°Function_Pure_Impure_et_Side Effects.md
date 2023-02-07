# Function Pure/Impure et Side Effects

# Function Pure/Impure et Side Effects

---

### *Fonction pure*

- Le code va s’exécuter de haut en bas

```jsx
const multiply = (arg1, arg2) => {
  return arg1 * arg2
}
```

Cette fonction est dites pur car peut importe le nombre de fois que j’appelle cette méthode avec les mêmes params, j’obtiendrais toujours le même résultat :

```jsx
multiply(2,2) // 4
multiply(2,2) // 4
multiply(2,2) // 4
multiply(2,2) // 4
```

Les Fonctions pures sont donc prévisible

### *Fonction impure*

```jsx
let imp = 10;

const multiply = (arg1, arg2) => {
  return arg1 * arg2 + imp
}
```

Ici ma fonction utilise une variable qui n’est pas directement dans le scope dans ma méthode, ainsi si cette valeur change je ne peut prédire le résultat du retour.

Cette fonction est alors dites impure

### *Side Effect*

Un autre cas ou une fonction n’est plus considérer comme pure est qu’elle va provoquer un side effect

```jsx
let imp = 10;

const multiply = (arg1, arg2) => {
   imp = arg1 * arg2 
  return arg1 + arg2 
}
```

Ici si ma méthode est appelée plusieurs fois avec les mêmes arguments j’aurai toujours la même valeur de retour, cependant ma let `imp` va être modifié.

C’est ce qu’on appelle un side effect, une fonction va provoquer un changement sur une variable qui n’est pas directement présentes dans son scope (porté) .