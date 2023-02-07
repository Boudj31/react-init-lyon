# Hooks

# Hooks

---

## *useState()*

`useState` va permettre d’encapsuler un état dans mon composant fonctionnel

```jsx
// destructuration 
const [name, setName] = useState()
```

Les valeurs sont individuels contrairement l’état des class

- React va relancer toute la fonction du composant à chaque fois qu’il détecte un changement de l’état ou des propriétés

## *useEffect()*

**`useEffect`**est un Hook de React qui permet de synchroniser un composant avec un système externe. 

Il vous permet d'exécuter du code à chaque fois qu'un composant se rend. 

C'est une façon de gérer les side effects (par exemple, la récupération de données, la mise à jour de l'état d'un composant) dans les composants fonctionnels.

 Il prend deux arguments: une fonction de rappel à exécuter après le rendu et une liste de dépendances qui indique à React quand réexécuter l'effet.

```jsx

useEffect( () => {
 console.log("a chaque rendu")
})

// componentDidMount alternative
useEffect( () => {
 console.log("rendu seulement une seule fois !")
}, [])

// componentDidUpdate alternative
useEffect( () => {
 console.log("rendu seulement une prémiere fois + rendu a chaque fois que " + toto + "change !")
}, [toto])

// componentWillUnmout alternative
useEffect( () => {

  window.addEventListener("scroll", console.log("scroll detecté")
  
 return () => {
   // dès que le composant ce demonte, ce code est executé
    windowr.removeEventListener("scroll", console.log("scroll supprimé")
}
 
}, [])

```