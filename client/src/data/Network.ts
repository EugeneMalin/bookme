import 'isomorphic-fetch';
import { IUser } from './interface/IUser';
const REMOVE_SERVER_TYPE = 'http'
const REMOTE_SERVER_HOST = 'localhost'
const REMOTE_SERVER_PORT = 3000

type ErrorRespose = {
    code: number,
    message: string
} 

export function fetchThenDispatch<K, T>(
    url: string,
    method: string,

    body?: K,
    headers?: any,

    dispatch: (item: T) => T = res => res
): Promise<T|ErrorRespose> {
    return fetch(
        `${REMOVE_SERVER_TYPE}://${REMOTE_SERVER_HOST}:${REMOTE_SERVER_PORT}/${url}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': `${REMOVE_SERVER_TYPE}://${REMOTE_SERVER_HOST}:${REMOTE_SERVER_PORT}`,
                ...headers
            }
        }
    )
        .then(resp => resp.json())
        .then(dispatch)
        .catch(err => ({code: -1, message: err}))
}


export function createUser(userDto: IUser): Promise<void|ErrorRespose> {
    return fetchThenDispatch<IUser, void|ErrorRespose>('user', 'POST', userDto);
}
