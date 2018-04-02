import React from 'react';
import { getTimeInZone } from '../../utils/timezones';

export default props => (
	<li>
		{ props.name } : { getTimeInZone( props.time, props.name ) }
	</li>
);
