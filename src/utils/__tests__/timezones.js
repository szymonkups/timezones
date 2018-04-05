import { getUserTimezone, getCurrentTime, getTimeInZone, getAllTimezones, getTimeString } from '../timezones';
import moment from 'moment-timezone';
import sinon from 'sinon';

describe( 'utils', () => {
	describe( 'timezones', () => {
		it( 'getTimezone() should use moment.tz.guess() and return string', () => {
			const spy = sinon.spy( moment.tz, 'guess' );
			const timezone = getUserTimezone();

			expect( typeof timezone ).toBe( 'string' );
			sinon.assert.calledOnce( spy );
		} );

		it( 'getCurrentTime() should return current time in string format', () => {
			const time = getCurrentTime();

			expect( typeof time ).toBe( 'string' );
		} );

		it( 'getTimeInZone() should return time in given timezone', () => {
			const nyTime = moment.tz( '2018-04-04 12:00', 'America/New_York' ).format();
			const gmtTime = getTimeInZone( nyTime, 'GMT' );

			expect( gmtTime.format() ).toEqual( '2018-04-04T16:00:00Z' );
		} );

		it( 'getAllTimezones() should return timezones', () => {
			const timezones = getAllTimezones();

			expect( Array.isArray( timezones ) ).toEqual( true );
			expect( timezones.includes( 'America/New_York' ) ).toEqual( true );
			expect( timezones.includes( 'GMT' ) ).toEqual( true );
		} );

		it( 'getTimeString should return time string from data', () => {
			const timeString = getTimeString( '09', '32', 'AM', 'GMT' );

			expect( timeString.indexOf( 'T09:32:00Z' ) > -1 ).toEqual( true );
		} );
	} );
} );
