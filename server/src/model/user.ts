import crypto from "crypto";
import { DataTypes, Model } from "sequelize";
import { connection } from "../lib/sequelize";

export interface IUser {
    email?: string;
    username?: string;
    password?: string;
}

class User extends Model implements IUser {

    public static get({email, password, username}: IUser) {
        const u = new User();
        u.username = username;
        u.email = email;
        u.salt = crypto.randomBytes(32).toString("hex");
        u.hashedPassword = u.encrypt(password);
        return u;
    }
    public id!: number;
    public username!: string;
    public email!: string;
    public createdAt!: Date;

    public salt!: string;
    public hashedPassword!: string;

    public encrypt(password: string): string {
        return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
    }

    public check(password: string): boolean {
        return this.encrypt(password) === this.hashedPassword;
    }
}

User.init({
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
    hashedPassword: DataTypes.STRING,
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    salt: DataTypes.STRING,
    username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
    },
}, {
    modelName: "user", sequelize: connection
});

export default User;
