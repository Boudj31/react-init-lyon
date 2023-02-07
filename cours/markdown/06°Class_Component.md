# Class Component

# Class component

---

```jsx
class App extends Component {

constuctor(){
super()
this.state = {name: "Rachid"}
}

render() {
return(
   <div className="App"> 
     <h1> Hello {this.state.name} </h1>
     <button @OnClick={this.setState({name: "Yanis")}>Changer de nom</button>
   </div>
}

}
```

Un composant de classe React est un composant défini en utilisant une classe ES6. Il a une méthode de rendu obligatoire qui décrit ce que le composant affiche. Il peut également avoir des méthodes supplémentaires pour mettre à jour son état et gérer des effets secondaires.

```jsx
// async methode
this.setState(
() => {
return {
name: "Yanis"
}
},
 () => {
console.log(this.state)
})
```