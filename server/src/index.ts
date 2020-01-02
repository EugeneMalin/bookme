import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import path from "path";
import {Op} from "sequelize";
import socketIO from "socket.io";
import logger from "./lib/log";
import { connection } from "./lib/sequelize";
import User, { IUser } from "./model/user";

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

connection.sync().then(() => {
    logger.info("database synced!");

    io.on("connection", (socket) => {
        logger.info("person connected!");
        socket.on("signUp", ({username, email, password}: IUser) => {
            const res = User.get({email, username, password}).save();
            res.then((user) => {
                if (user) {
                    socket.emit("signedUp", {
                        username
                    });
                }
            });
            res.error((reason) => {
                socket.emit("error", {
                    error: reason,
                    event: "signup",
                });
            });
            res.catch((error) => {
                socket.emit("error", {
                    error,
                    event: "signup",
                });
            });
        });
        socket.on("signIn", ({username, email, password}: IUser) => {
            User.findOne({
                where: {
                    [Op.or]: [{username}, {email}]
                }
            }).then((user) => {
                if (user) {
                    if (user.check(password)) {
                        socket.emit("signedIn", {
                            createdAt: user.createdAt,
                            email: user.email,
                            username: user.username,
                        });
                    }
                    socket.emit("error", {
                        error: new Error(`Password ${email || username} isn't right`),
                        event: "signin",
                    });
                }
                socket.emit("error", {
                    error: new Error(`No user ${email || username}`),
                    event: "signin",
                });
            });
        });
    });
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
