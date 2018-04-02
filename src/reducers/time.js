import { getCurrentTime } from '../utils/timezones';

export default function timezones( state, action ) {
	if ( state === undefined ) {
		return getCurrentTime();
	}

	// Return same state if no action is matched.
	return state;
}
