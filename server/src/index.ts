import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import path from "path";
import socketIO from "socket.io";
import logger from "./lib/log";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express();
const http = createServer(app);
const io = socketIO(http);

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

io.on("connection", (socket) => {
    logger.info("connected!");
});

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );
// define a route handler for the info page
app.get( "/info", ( req, res ) => {
    // render the index template
    res.render( "info" );
} );
// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
