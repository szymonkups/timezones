import reducer from '../timezones';
import { add, remove } from '../../actions/timezones';
import { getUserTimezone } from '../../utils/timezones';

describe( 'reducers', () => {
	describe( 'timezone', () => {
		it( 'should return initial state', () => {
			expect( reducer( undefined, {} ) ).toEqual( [ getUserTimezone(), 'GMT' ] );
		} );

		it( 'should handle ADD_TIMEZONE action', () => {
			const action = add( 'GMT+2' );
			const currentState = [];

			const result = reducer( currentState, action );

			// New object without mutation of current state.
			expect( result === currentState ).toEqual( false );
			expect( result ).toEqual( [ 'GMT+2' ] );
		} );

		it( 'should handle REMOVE_TIMEZONE action', () => {
			const action = remove( 'GMT+2' );
			const currentState = [ 'GMT', 'GMT+2' ];

			const result = reducer( currentState, action );

			// New object without mutation of current state.
			expect( result === currentState ).toEqual( false );
			expect( result ).toEqual( [ 'GMT' ] );
		} );

		it( 'should return same state when action is not supported', () => {
			const action = {
				type: 'ACTION_NOT_SUPPORTED',
				time: 'GMT+1'
			};

			const state = [ 'GMT+10' ];
			const result = reducer( state , action );
			expect( result === state ).toEqual( true );
		} );
	} );
} );
