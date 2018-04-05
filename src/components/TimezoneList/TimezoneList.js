import React from 'react';
import Timezone from '../../components/Timezone/Timezone';
import PropTypes from 'prop-types';
import styles from './TimezoneList.css';

/**
 * Component representing timezones list.
 */
const TimezoneList = props => {
	const timezones = props.timezones.map( timezone =>
		<Timezone onRemove={ props.onRemove } onTimeChange={ props.onTimeChange } key={ timezone } name={ timezone } time={ props.time } />
	);

	return (
		<ul className={ styles.list }>
			{ timezones }
		</ul>
	);
};

TimezoneList.propTypes = {
	timezones: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired,
	onTimeChange: PropTypes.func.isRequired,
	time: PropTypes.string.isRequired,
};

export default TimezoneList;
