import React, { Component }  from 'react';
import { getTimeInZone, getTimeString } from '../../utils/timezones';
import styles from './Timezone.css';

export default class Timezone extends Component {
	state = {};

	onInputBlur = () => {
		this.handleTimeChange( null, null, null );
	};

	onPeriodToggle = () => {
		const currentPeriod = this.state.period;
		const newPeriod = currentPeriod === 'AM' ? 'PM' : 'AM';
		this.setState( { period: newPeriod } );

		this.handleTimeChange( null, null, newPeriod );
	};

	handleTimeChange( newHours, newMinutes, newPeriod ) {
		const newTimeString = getTimeString(
			newHours || this.state.hours,
			newMinutes || this.state.minutes,
			newPeriod || this.state.period,
			this.props.name
		);

		this.props.onTimeChange( newTimeString  );
	}

	onHourChange = event => {
		const newValue = event.target.value;
		const newIntValue = parseInt( newValue, 10 );

		if ( isNaN( newIntValue ) || newIntValue > 12 || newIntValue < 1 ) {
			return;
		}

		this.setState( {
			hours: event.target.value
		} );
	};

	onMinutesChange = event => {
		const newValue = event.target.value;
		const newIntValue = parseInt( newValue, 10 );

		if ( isNaN( newIntValue ) || newIntValue > 59 || newIntValue < 0 ) {
			return;
		}

		this.setState( {
			minutes: event.target.value
		} );
	};

	static getDerivedStateFromProps( nextProps ) {
		const timeInZone = getTimeInZone( nextProps.time, nextProps.name );
		const hours = timeInZone.format( 'hh' );
		const minutes = timeInZone.format( 'mm' );
		const period = timeInZone.format( 'A' );

		return {
			hours, minutes, period
		};
	}

	render() {
		const props = this.props;
		const remove = () => props.onRemove( props.name );
		const { hours, minutes, period } = this.state;

		return (
			<li className="row ">
				<div className={ 'col-md-6 col-md-offset-3 ' + styles.timezone }>
					<div className="row">
						<div className={ 'col-sm-6 ' + styles.name }>
							{ props.name }
						</div>
						<div className={ 'col-sm-4 col-xs-10 ' + styles.time }>
							<input maxLength="2" className={ styles.hours } type="text" value={ hours } onChange={ this.onHourChange } onBlur={ this.onInputBlur } />
							:
							<input maxLength="2" className={styles.minutes} type="text" value={ minutes } onChange={ this.onMinutesChange } onBlur={ this.onInputBlur } />
							<a className={ styles.period } onClick={ this.onPeriodToggle }>{ period }</a>
						</div>
						<a className={ 'col-sm-2 col-xs-2 ' + styles.button } onClick={ remove } >
							<i className="fas fa-trash-alt"></i>
						</a>
					</div>
				</div>
			</li>
		);
	}
}
