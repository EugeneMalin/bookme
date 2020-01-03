import socket from './socket';
import { createStore, combineReducers } from 'redux';
import user, { gotUser } from './user';
import { showMessage } from "react-native-flash-message";

const reducers = combineReducers({ user });
const store = createStore(reducers);

const actions = {
    gotUser
}

interface IUser {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    patronumic: string;
}

interface IError {
    message: string;
    field: string;
}

interface IAnswer {
    success: boolean;

    error?: IError;

    user?: IUser;
}

socket.on('messaged', ({message, type = 'info'}) => {
    showMessage({
        message, type
    })
})

const emit = (qEvent: string, params: Object, aEvent: string = null): Promise<IAnswer> => {
    return new Promise((resolve) => {
        !aEvent && resolve({success: true})
        aEvent && socket.once(aEvent, resolve);
        socket.emit(qEvent, params);
    }) 
}

export {
    store,
    socket,
    actions,

    emit
}
