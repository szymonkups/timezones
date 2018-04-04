import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App/App';
import rootReducer from './reducers';
import './index.css';

// Create redux store starting from root reducer.
const store = createStore( rootReducer );

// Render "App" component as application root.
ReactDOM.render( (
	<Provider store={ store } >
		<App />
	</Provider>
), document.getElementById( 'root' ) );
