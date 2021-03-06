import { userMdl } from './userMdl'
import { socketMdl } from './socketMdl';
import { chatMdl } from './chatMdl';
import { lobbyMdl } from './lobbyMdl';
import { roomMdl } from './roomMdl';
//import { routerMdl } from './routerMdl';

export const  middleware = [
	...socketMdl, 
	...chatMdl, 
	...userMdl,
	...lobbyMdl,
	...roomMdl,
]