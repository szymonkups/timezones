import { getUserTimezone } from '../utils/timezones';

export default function timezones( state, action ) {
	// If state is undefined initially - return an empty array.
	if ( state === undefined ) {
		return [
			{ id: 0, name: 'GMT' },
			{ id: 1, name: getUserTimezone() }
		];
	}

	// Return same state if no action is matched.
	return state;
}
