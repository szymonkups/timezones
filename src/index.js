import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/app/App';
import rootReducer from './reducers';

// Create redux store starting from root reducer.
const store = createStore( rootReducer );

ReactDOM.render( (
	<Provider store={ store } >
		<App />
	</Provider>
), document.getElementById( 'root' ) );
