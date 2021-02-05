```js
class filters {
    // ...
    computeCustomMatch() {
        return true;
    },
    computeMatch(item) {
        if (! _.isEmpty(this.filter.search) && ! isMatchingSearch(item, this.filter.search)) {
            return false;
        }
        for (const collection of ["labels", "topics", "skills"]) {
            for (const tagId of this.filter.tags[collection]) {
                if (! _.find(item[collection], tag => (tag._id || tag) === tagId)) {
                    return false;
                }
            }
        }
        if (this.filter.selection === "selected" && ! this.selectedItemsMap[item._id]) {
            return false;
        }
         return this.computeCustomMatch(item) && true;
    }
    // ...
}
```




Mes remarques sont mineures par rapport à l'ensemble de cette PR, j'en ai conscience :wink: , et je ne la fait pour conseiller des changement ici parce qu'il est à mon avis plus utile de finir la migration Vue rapidement que de faire des modifications techniques et un peu mineures. Ces remarques sont potentiellement pour la suite si un cas similaire se présente.

Je trouve la fonction `computeMatch` difficile à lire:
- elle s'appelle computeMatch mais si je comprend bien elle renvoie un booléen. Fait-elle en fait un test du type `doesItemMatchFilters()` ?

- la fonction `computeCustomMatch` renvoie toujours true. Après investigation, elle semble être une fonction purement "abstraite" qui sera redéfinie par héritage. Un commentaire `// abstract` ou `// to allow overriding` pourrait être utile.

- le `this.computeCustomMatch(item) && true` est-il utilisé pour convertir le retour en bouléen ? Si oui alors il est potentiellement erroné si `computeCustomMatch` renvoie `null` par exemple. Pourrait-on faire un `!! this.computeCustomMatch(item)` ?

- l'intention du deuxième `if` de garde est très difficile à comprendre

- les ifs ressemblent à tort à des if de garde, et `computeCustomMatch` semble être à tort la fonction cœur. La structure me semble être plutôt celle-ci:

```js
computeMatch(item) { // ou doesItemMatchFilters
    if(! this.doesItemMatchCommonFilters(item)) { return false; }
    if(! this.doesItemMatchCustomFilters(item)) { return false; }
    return true;
}
```
