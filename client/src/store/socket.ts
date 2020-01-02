import io from 'socket.io-client';
import { SOCKET_HOST, SOCKET_PORT } from '../core/const';

const socket = io(`${SOCKET_HOST}:${SOCKET_PORT}`);
socket.connect();
export default socket
