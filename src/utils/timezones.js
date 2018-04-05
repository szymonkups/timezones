/**
 * This file contains timezone utilities build on top of moment-timezone library.
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

/**
 * Returns time in given timezone.
 *
 * @param {String} time Time string in any timezone.
 * @param {String} zone Name of the destination timezone.
 * @return {Object} Time information in given timezone.
 */
export function getTimeInZone( time, zone ) {
	return moment( time ).tz( zone );
}

/**
 * Returns all available timezones.
 *
 * @return {Array.<String>}
 */
export function getAllTimezones() {
	return moment.tz.names();
}

/**
 * Returns timezone string from given hour, minute and period.
 *
 * @param {String} hours
 * @param {String} minutes
 * @param {String} period
 * @param {String{ timezone
 * @return {String}
 */
export function getTimeString( hours, minutes, period, timezone ) {
	return moment.tz( `${ hours } ${ minutes } ${ period }`, 'hh mm A', timezone ).format();
}
