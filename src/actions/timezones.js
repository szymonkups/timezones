export function add( name ) {
	return {
		type: 'ADD_TIMEZONE',
		name
	}
}

export function remove( name ) {
	return {
		type: 'REMOVE_TIMEZONE',
		name
	}
}
