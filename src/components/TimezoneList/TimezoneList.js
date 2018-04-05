import React from 'react';
import Timezone from '../../components/Timezone/Timezone';

import styles from './TimezoneList.css';

/**
 * Component representing timezones list.
 */
export default props => {
	const timezones = props.timezones.map( timezone =>
		<Timezone onRemove={ props.onRemove } onTimeChange={ props.onTimeChange } key={ timezone } name={ timezone } time={ props.time } />
	);

	return (
		<ul className={ styles.list }>
			{ timezones }
		</ul>
	);
};
