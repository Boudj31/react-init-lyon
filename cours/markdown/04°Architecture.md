# Architecture

Architecture

---

Structure minimal d’un projet React après `npx create-react app myapp`

```jsx
my-app/
node_modules/
public/
index.html
favicon.ico
src/
App.js
index.js
package.json
package-lock.json
[README.md](http://readme.md/)
```

- Le répertoire **`node_modules`** contient toutes les dépendances npm que vous avez installées pour votre projet.
- Le répertoire **`public`** contient les fichiers statiques tels que **`index.html`**, qui est la page d'accueil de votre application, et **`favicon.ico`**, qui est l'icône du site.
- Le répertoire **`src`** contient les fichiers source de votre application, tels que les composants React et les fichiers de configuration. Le fichier **`index.js`** est le point d'entrée de votre application, et le fichier **`App.js`** est le composant principal de votre application.
- Le fichier **`package.json`** décrit les dépendances et les scripts de votre application.
- Le fichier **`package-lock.json`** décrit les versions exactes des dépendances installées pour votre projet.
- Le fichier **`README.md`** est un fichier de documentation pour votre projet.