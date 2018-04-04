import timeReducer from '../time';
import { setNew } from '../../actions/time';

describe( 'reducers', () => {
	describe( 'time', () => {
		it( 'should return initial state', () => {
			expect( timeReducer( undefined, {} ) ).toBeDefined();
		} );

		it( 'should handle SET_NEW_TIME action', () => {
			const action = setNew( '00:00:00' );
			expect( timeReducer( '12:22:00', action ) ).toEqual( '00:00:00' );
		} );

		it( 'should return same time when action is not supported', () => {
			const action = {
				type: 'ACTION_NOT_SUPPORTED',
				time: '12:12:12'
			};

			expect( timeReducer( '00:00:00', action ) ).toEqual( '00:00:00' );
		} );
	} );
} );
