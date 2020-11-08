import { javascript } from "../../utils";

export const article = {
    title: "Separate the database",
    content: `
        <h1>Separate the database</h1>

        <p>
            Il faut séparer la bdd des contrôleurs et des modèles. Et cela ne veut pas dire qu'il faut utliser un ORM...
            L'ORM doit être derrière l'abstraction.
        </p>

        <p>Exemple:</p>

        ${javascript(`
            async function cancelFlight(flightId) {
                const flight = await db.flights.find({id: flightId, cancelled: false});
                const tickets = await db.tickets.find({flightId: flightId});
    
                await Promise.all(tickets.map(async (ticket) => {
                    const passenger = db.passengers.find({id: ticket.passengerId});
    
                    await reimbursePassenger(passenger, ticket);
                    await sendCancellationMailToPassenger(passenger, ticket);
    
                    await db.tickets.update({id: ticket.id}, {cancelled: true});
                }));
    
                await db.flights.update({id: flight.id}, {cancelled: true});
            }
        `)}

        ${javascript(`
            async function cancelFlight(flightId) {
                const flight = await Flight.get(flightId);
                const tickets = await flight.getTickets();
    
                await Promise.all(tickets.map(async (ticket) => {
                    const passenger = ticket.getPassenger();
    
                    await passenger.reimburse(ticket);
                    await passenger.sendCancellationMail(ticket);
    
                    await ticket.setCancelled();
                }));
    
                await flight.setCancelled();
            }
        `)}

        <p>Continuer à faire du refactor.</p>
    `,
};
