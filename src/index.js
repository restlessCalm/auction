import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './containers/App.js';
import { store, history } from './redux/store';

ReactDOM.render(
	<Provider store={store}>
	 	<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('root'));

registerServiceWorker();
