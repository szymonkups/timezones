import React  from 'react';
import TimeInput from '../TimeInput/TimeInput';
import styles from './Timezone.css';
import { getTimeInZone } from '../../utils/timezones';

export default props => {
	const remove = () => props.onRemove( props.name );

	return (
		<li className="row ">
			<div className={ 'col-md-6 col-md-offset-3 ' + styles.timezone }>
				<div className="row">
					<div className={ 'col-sm-6 ' + styles.name }>
						{ props.name }
					</div>
					<TimeInput
						name={ props.name }
						time={ getTimeInZone( props.time, props.name ) }
						onTimeChange={ props.onTimeChange }
					/>
					<a className={ 'col-sm-2 col-xs-2 ' + styles.button } onClick={ remove } >
						<i className="fas fa-trash-alt"></i>
					</a>
				</div>
			</div>
		</li>
	);
};
