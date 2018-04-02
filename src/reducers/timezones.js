import { getUserTimezone } from '../utils/timezones';

let uid = 2;

export default function timezones( state, action ) {
	// If state is undefined initially - return an array with default timezones: GMT and user's.
	if ( state === undefined ) {
		return [
			{ id: 0, name: 'GMT' },
			{ id: 1, name: getUserTimezone() }
		];
	}

	if ( action.type === 'ADD_TIMEZONE' ) {
		return [ ...state, { id: uid++, name: action.name } ];
	}

	if ( action.type === 'REMOVE_TIMEZONE' && action.id > 1 ) {
		return state.filter( timezone => timezone.id !== action.id );
	}

	// Return same state if no action is matched.
	return state;
}

