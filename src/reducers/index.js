import { combineReducers } from 'redux';
import timezones from './timezones';
import time from './time';

export default combineReducers( {
	timezones,
	time
} );
