import rootReducer from '../index';
import { createStore } from 'redux';
import { getUserTimezone } from '../../utils/timezones';

describe( 'reducers', () => {
	describe( 'index reducer', () => {
		it( 'should return combined reducer', () => {
			const store = createStore( rootReducer );

			expect( typeof store.getState().time ).toEqual( 'string' );
			expect( store.getState().timezones ).toEqual( [ getUserTimezone(), 'GMT' ] );
		} );
	} );
} );
