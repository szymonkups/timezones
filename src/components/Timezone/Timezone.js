import React from 'react';
import { getTimeInZone } from '../../utils/timezones';
import styles from './Timezone.css';

export default props => (
	<li className="row ">
		<div className={ 'col-md-6 col-md-offset-3 ' + styles.timezone }>
			<div className="row">
				<div className={ 'col-sm-6 ' + styles.name } >
					{ props.name }
				</div>
				<div className={ 'col-sm-4 col-xs-10 ' + styles.time }>
					{ getTimeInZone( props.time, props.name ) }
				</div>
				<a className={ 'col-sm-2 col-xs-2 ' + styles.button }>
					<i className="fas fa-trash-alt"></i>
				</a>
			</div>
		</div>
	</li>
);
