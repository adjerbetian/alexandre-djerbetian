import { app } from "./app";
import http from "http";
import config from "./config";

launchServer();

function launchServer() {
    app.set("port", config.port);

    const server = http.createServer(app);
    server.listen(config.port);
    server.on("error", onError);
    server.on("listening", onListening);
}

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") throw error;

    switch (error.code) {
        case "EACCES":
            console.error(`Port ${config.port} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`Port ${config.port} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    console.log(`Listening on ${config.port}`);
}
