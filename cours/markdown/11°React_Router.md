# React Router

# React Router

---

- Librairie de React permettant une navigation dynamique
- Une page est considérée comme un composant en react
- Installation d’une librairie tierce

```jsx
npm install react-router-dom 
```

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
```

```jsx
<Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/auth" element={<Login />} />
              <Route path="/produits/:slug" element={<ProductDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes
    </Router>
```