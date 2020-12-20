import { IUser } from "./interface/IUser";
import { User } from "./User";

const users: User[] = [];

export function addUser(user: IUser): Promise<User> {
    return new Promise((resolve, reject) => {
        if (!users.find(usr => usr.login === user.login || usr.email === user.email)) {
            const nUser = new User(user);
            resolve(nUser);
            users.push(nUser);
            return;
        }
        reject('Such user is exist.');
    })
}


export function updateUser(user: IUser): Promise<User> {
    return readUser(user.login, user.email, user.password).then((usr) => {
        usr.update(user);
        return usr;
    })
}

export function readUser(login: string|null, email: string|null, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
        const usr = users.find(usr => (login && usr.login === login) || (email && usr.email === email))
        if (!usr) {
            reject('There is no such user!');
            return;
        }
        if (usr.password === password) {
            resolve(usr);
            return;
        }
        reject('There is wrong login, email or password.')
    })
}

export function deleteUser(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const usr = users.find(usr => (usr.login === user.login) || (usr.email === user.email))
        if (!usr) {
            reject('There is no such user!');
            return;
        }
        const deleteIndex = users.indexOf(usr);
        users.splice(deleteIndex, 1);
        resolve(true)
    })
}
