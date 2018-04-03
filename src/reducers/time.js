import { getCurrentTime } from '../utils/timezones';

export default function time( state, action ) {
	if ( state === undefined ) {
		return getCurrentTime();
	}

	if ( action.type === 'SET_NEW_TIME' ) {
		return action.newTime;
	}

	// Return same state if no action is matched.
	return state;
}
