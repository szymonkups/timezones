import { getUserTimezone } from '../utils/timezones';

export default function timezones( state, action ) {
	// If state is undefined initially - return an array with default timezones: GMT and user's.
	if ( state === undefined ) {
		return [
			'GMT',
			getUserTimezone()
		];
	}

	if ( action.type === 'ADD_TIMEZONE' && !state.includes( action.name ) ) {
		return [ ...state, action.name ];
	}

	if ( action.type === 'REMOVE_TIMEZONE' ) {
		return state.filter( timezone => timezone !== action.name );
	}

	// Return same state if no action is matched.
	return state;
}

