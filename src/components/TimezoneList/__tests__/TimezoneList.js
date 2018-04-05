import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import TimezoneList from '../TimezoneList';
import Timezone from '../../Timezone/Timezone';
import TimeInput from '../../TimeInput/TimeInput';
import { getTimeString, getTimeInZone } from '../../../utils/timezones';

Enzyme.configure( { adapter: new Adapter() } );
const initTime = getTimeString( '09', '20', 'AM', 'GMT' );

function setup() {
	const props = {
		timezones: [ 'GMT', 'America/New_York' ],
		onRemove: jest.fn(),
		onTimeChange: jest.fn(),
		time: initTime
	};

	const enzymeWrapper = mount( <TimezoneList {...props} /> );

	return {
		props,
		enzymeWrapper
	}
}

describe( 'components', () => {
	describe( 'TimezoneList', () => {
		it( 'should render self and subcomponents', () => {
			const { enzymeWrapper } = setup();

			expect( enzymeWrapper.find( 'ul' ).exists() ).toBe( true );
			expect( enzymeWrapper.find( 'ul' ).children().length ).toEqual( 2 );

			const gmtTimezone = enzymeWrapper.find( Timezone ).first();
			const inputProps = gmtTimezone.find( TimeInput ).props();

			expect( inputProps.name ).toEqual( 'GMT' );
			expect( inputProps.time.format() ).toEqual( getTimeInZone( initTime, 'GMT' ).format() );

			const nyTimezone = enzymeWrapper.find( Timezone ).at( 1 );
			const inputProps2 = nyTimezone.find( TimeInput ).props();

			expect( inputProps2.name ).toEqual( 'America/New_York' );
			expect( inputProps2.time.format() ).toEqual( getTimeInZone( initTime, 'America/New_York' ).format() );
		} );
	} );
} );
