import { getUserTimezone } from '../utils/timezones';

export default function timezones( state, action ) {
	// If state is undefined initially - return an empty array.
	if ( state === undefined ) {
		return [ 'GMT', getUserTimezone() ];
	}

	// Return same state if no action is matched.
	return state;
}
