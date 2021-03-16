import 'isomorphic-fetch';
import { IUser } from './interface/IUser';
import { User } from './User';
const REMOVE_SERVER_TYPE = 'http'
const REMOTE_SERVER_HOST = 'localhost'
const REMOTE_SERVER_PORT = 3000

type NetworkResult = {
    statusCode: number,
    message: string
} 

export function fetchThenDispatch<K, T>(
    url: string,
    method: string,

    body?: K,
    headers?: any,

    dispatch: (item: T) => T = res => res
): Promise<T|NetworkResult> {
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
        .then(async (resp) => {
            if (!resp.ok) {
                return Promise.reject(await resp?.json())
            }
            return resp?.json()
        })
        .then(dispatch)
}


export function createUser(userDto: IUser): Promise<void|NetworkResult> {
    return fetchThenDispatch<IUser, void|NetworkResult>('user', 'POST', userDto);
}

export function readUser(password: string, login?: string, email?: string): Promise<void|NetworkResult> {
    return fetchThenDispatch<Partial<IUser>, void|NetworkResult>('user', 'GET', {
        email,
        login,
        password
    })
}
