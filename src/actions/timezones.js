export function add( name ) {
	return {
		type: 'ADD_TIMEZONE',
		name
	}
}

export function remove( id ) {
	return {
		type: 'REMOVE_TIMEZONE',
		id
	}
}
