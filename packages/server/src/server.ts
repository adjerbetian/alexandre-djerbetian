import { app } from "./app";
import Debug from "debug";
import http from "http";

const debug = Debug("server:server");
const port = parseInt(process.env.PORT || "3000", 10);

launchServer();

function launchServer() {
    app.set("port", port);

    const server = http.createServer(app);
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
}

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") throw error;

    switch (error.code) {
        case "EACCES":
            console.error(`Port ${port} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`Port ${port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    debug(`Listening on ${port}`);
}
