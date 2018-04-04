import { setNew } from '../time';

describe( 'actions', () => {
	describe( 'time', () => {
		describe( 'setNew()', () => {
			it( 'should return new action with provided time', () => {
				const action = setNew( '00:00:00' );

				expect( action.type ).toEqual( 'SET_NEW_TIME' );
				expect( action.newTime ).toEqual( '00:00:00' );
			} );
		} );
	} )
} );
