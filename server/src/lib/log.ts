/**
 * Logger creator class
 */

import { createLogger as crtLgr, format, Logger, LoggerOptions, transports } from "winston";

const options: LoggerOptions = {
    defaultMeta: { service: "user-service" },
    format: format.json(),
    level: "info",
    transports : [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({ filename: "log/error.log", level: "error" }),
        new transports.File({ filename: "log/combined.log" }),
        // - Write debugging logs into the console
        new transports.Console({
            level: "debug",
        })
    ]
};
const logger: Logger = crtLgr(options);

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.Console({
        format: format.simple()
    }));
}

export default logger;
