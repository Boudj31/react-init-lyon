# Functional component

# Functional component

---

- Peut être déclaré en fonction fléchée
- Plus besoin de `constructor` ni de la méthode `render()`
- Fonction pure (top to bottom)
- Retourne l’Interface Utilisateur en JSX
- Plus de cycle de vie comme avec les Class

```jsx
function App () {
const [name, setName] = useState("Rachid")
changeName = () => {
    this.setState({ name: "Yanis" });
  };

return(
   <div className="App"> 
     <h1> Hello {name} </h1>
     <button @OnClick={setName("Yanis")}>Changer de nom</button>
   </div>

}
```