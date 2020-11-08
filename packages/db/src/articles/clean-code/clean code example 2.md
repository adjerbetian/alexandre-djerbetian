
Cette carte n'a pas pour but de changer une règle de code, mais plutôt de lancer une réflexion sur un point de vue qui peut paraître contre intuitif mais qui me semble important : **il faut oublier l'optimisation**. Je me permets cette carte parce que cela fait plusieurs fois que je remarque des utilisations de techniques d'optimisation qui me semble aller à l'encontre la propreté du code.

Il y a beaucoup de références sur la "*premature optimisation*", mais je vais me permettre juste un exemple mon invention en illustration:

```js
// optimized
function deleteFlight(flight) {
    getTickets(flight).forEach(ticket => {
        getTicketPassengers(ticket).forEach((passenger) => {
            sendCancellationMailForFlight(passengers, flight, ticket)
        })
        reimburse(ticket);
    });
}

// not optimized - but more readable / maintainable / extendable
function cancelFlight(flight) {
    sendCancellationMailsToPassengers();
    reimburseTickets();


    function sendCancellationMailsToPassengers() {
        getTickets(flight).forEach(ticket => {
            getTicketPassengers(ticket).forEach((passenger) => {
                sendCancellationMailForFlight(passengers, flight, ticket)
            });
        });
    }

    function reimburseTickets() {
        getTickets(flight).forEach(ticket => {
            reimburse(ticket);
        });
    }
}
```

Est-ce que ça veut dire qu'il ne faut pas que le code soit rapide ? Non, il faut que le code soit rapide. Mais il faut résoudre les problèmes quand ils existent. Avec un profiler on peut voir quelles parties du code sont à optimiser, et sur ces parties on peut mettre le paquet avec du cache, des variables temporaires etc. Sur le reste, il n'y a aucune raison de même penser à optimiser car la complexité temporelle d'un code est presque toujours inversement proportionnelle à sa complexité de lecture.
