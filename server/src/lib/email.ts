import { createTransport } from "nodemailer";
import { IUser } from "../model/user";
import config from "./config";

export function sendConfirm(user: IUser) {
    const smtpTransport = createTransport({
        auth: {
            pass: config.get("email:pass"),
            user: config.get("email:user"),
        },
        port: 25,
        service: config.get("email:server")
    });

    // sending verification email to user
    const link = `${config.get("address")}/${config.get("email:link")}?id=${user.email}`;

    const mailOptions = {
        from: config.get("email:name"),
        html: `
            Welcome to service, ${user.username}!<br/>
            To solve problems with forgetting passwords and to full up your account click here:<br/>
            <a href="${link}">Click here to verify</a>
        `,
        subject: "Please confirm your Email account",
        to: user.email,
    };
    smtpTransport.sendMail(mailOptions);
}
