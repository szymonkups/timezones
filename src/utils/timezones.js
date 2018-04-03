/**
 * This file contains timezone utilities build on top of moment-timezone library.
 * Moment is not used directly so it might be easier to exchange it in the future.
 */

import moment from 'moment-timezone';

/**
 * Returns user timezone.
 *
 * @return {String}
 */
export function getUserTimezone() {
	return moment.tz.guess();
}

/**
 * Returns current time in string format.
 *
 * @return {String}
 */
export function getCurrentTime() {
	return moment().format();
}

export function getTimeInZone( time, zone ) {
	return moment( time ).tz( zone );
}

export function getAllTimezones() {
	return moment.tz.names();
}

export function getTimeString( hours, minutes, period, timezone ) {
	return moment.tz( `${ hours } ${ minutes } ${ period }`, 'hh mm A', timezone ).format();
}
