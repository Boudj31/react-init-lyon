# Les composants

# Les composants

---

Un composant parent est un composant qui contient d'autres composants enfants. Les enfants peuvent être des composants simples ou des composants plus complexes qui contiennent également des enfants.

Le composant parent fournit des données et des fonctionnalités aux composants enfants à l'aide de `props` (propriétés). Les composants enfants peuvent être modifiés en retour grâce à des événements déclenchés par les interactions utilisateur.

Ce modèle de composition permet une structure claire et hiérarchique pour les applications React, ce qui facilite la maintenance et la mise à jour du code. Les composants peuvent être réutilisés dans différentes parties de l'application, ce qui permet une meilleure organisation et une maintenance plus efficace du code.

Par exemple, un composant "Card" peut être défini en tant que composant parent qui contient des composants enfants pour afficher une image, du texte et des boutons. Ce composant peut être utilisé à plusieurs endroits dans l'application pour afficher différentes informations. Les propriétés du composant parent sont passées aux composants enfants pour personnaliser leur contenu.