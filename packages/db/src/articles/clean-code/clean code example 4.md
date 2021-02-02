test unitaire vs test intégration

J'ai entendu plusieurs fois les remarques suivantes
- les tests d'intégration sont des tests qui parlent avec une bdd
- les tests d'intégration sont plus robuste

Le premier point est vrai. Mais certains le compennent alors comme "si je ne parle pas à une bdd, je suis un test unitaire". Si la logique mathématique est excellente, ce n'est pas toujours vrai... Vive le langage et l'implicite ! En effet, remplacer la bdd par un mock de la même bdd en mémoire vive n'est pas passer de integration à unitaire. En effet, bdd ne doit pas être compris comme "une bdd qui stocke dans des fichiers sur le disque" mais comme "un service de stockage de données". Et si le service de stockage existe et est utilisé, alors ce sont des tests d'intégration pour la raison suivante: **on teste la logique métier en intégration avec le service de stockage". Ça va peut-être plus vite, certes, mais à la fin, le design est le même. 

cf: https://trello.com/c/6Om3udo0/467-plan-pour-am%C3%A9liorer-les-tests#comment-5be4560ad1b7c75eff9e225d

Références : 
- https://martinfowler.com/bliki/UnitTest.html
- https://martinfowler.com/bliki/IntegrationTest.html
- https://martinfowler.com/articles/mocksArentStubs.html



