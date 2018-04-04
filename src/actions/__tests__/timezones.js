import { add, remove } from '../timezones';

describe( 'actions', () => {
	describe( 'timezones', () => {
		describe( 'add()', () => {
			it( 'should return new action with new timezone', () => {
				const action = add( 'GMT' );

				expect( action.type ).toEqual( 'ADD_TIMEZONE' );
				expect( action.name ).toEqual( 'GMT' );
			} );
		} );

		describe( 'remove()', () => {
			it( 'should return new action with timezone to remove', () => {
				const action = remove( 'GMT' );

				expect( action.type ).toEqual( 'REMOVE_TIMEZONE' );
				expect( action.name ).toEqual( 'GMT' );
			} );
		} );
	} )
} );
