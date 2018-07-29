import { applyMiddleware, createStore } from 'redux';
import { reducers } from './reducers';
import { userMdl } from './middleware/userMdl'
import { socketMdl } from './middleware/socketMdl';
import { chatMdl } from './middleware/chatMdl';

export const store = createStore(
  reducers,
  applyMiddleware(
  	...socketMdl, 
  	...chatMdl, 
  	...userMdl
	),
);