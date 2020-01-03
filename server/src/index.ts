import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import path from "path";
import {Op} from "sequelize";
import socketIO from "socket.io";
import config from "./lib/config";
import logger from "./lib/log";
import { connection } from "./lib/sequelize";
import User, { IUser } from "./model/user";
// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;
const app = express();
const io = socketIO(createServer().listen(config.get("socketPort")));

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

connection.sync().then(() => {
    logger.info("database synced!");

    io.on("connection", (socket) => {
        logger.info("person connected!");

        const send = (message: string, event: string, params: any = {type: "danger"}) => {
            socket.emit("messaged", {
                event,
                message,
                success: false,
                ...params
            });

            logger[params.type === "danger" ? "warn" : "info"](`At event ${event} happened ${message}`);
        };

        socket.on("signUp", ({username, email, password}: IUser) => {
            logger.info(`Try to sign up with ${username || email}`);
            User.get({email, username, password}).save().then((user) => {
                if (user) {
                    socket.emit("signedUp", {
                        success: true
                    });
                    send(`Signed up with ${username}, send confirm to ${email}`, "signup", "info");
                }
            }).catch((error: Error) => {
                if (error.message.includes("users_email_key")) {
                    socket.emit("signedUp", {
                        error: {
                            field: "email",
                            message: `${email} has already used`
                        },
                        success: false
                    });
                    return;
                }
                if (error.message.includes("users_username_key")) {
                    socket.emit("signedUp", {
                        error: {
                            field: "username",
                            message: `${username} has already used`
                        },
                        success: false
                    });
                    return;
                }
                send(JSON.stringify(error.message), "signup");
            });
        });
        socket.on("signIn", ({username, email, password}: IUser) => {
            const query = [];
            if (username) {
                query.push({username});
            }
            if (email) {
                query.push({email});
            }

            User.findOne({
                where: {
                    [Op.or]: query
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
                    send(`Unright password for ${email || username}`, "signin");
                }
                send(`No user ${email || username}`, "signin");
            });
        });
    });
});

createServer(app);

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
