import React, { Component }  from 'react';
import styles from './TimeInput.css';
import { getTimeString } from '../../utils/timezones';

export default class TimeInput extends Component {
	state = {};

	onHourChange = event => {
		if ( !validateHour( event.target.value ) ) {
			return;
		}

		this.setState( {
			hours: event.target.value
		} );
	};

	onMinutesChange = event => {
		if ( !validateMinutes( event.target.value ) ) {
			return;
		}

		this.setState( {
			minutes: event.target.value
		} );
	};

	onKeyPress = event => {
		if ( event.key === 'Enter' ) {
			this.handleTimeChange();
		}
	};

	onInputFocus = event => {
		event.target.select();
	};

	onInputBlur = () => {
		this.handleTimeChange();
	};

	onPeriodToggle = () => {
		const currentPeriod = this.state.period;
		const newPeriod = currentPeriod === 'AM' ? 'PM' : 'AM';
		this.setState( { period: newPeriod } );

		this.handleTimeChange( newPeriod );
	};

	handleTimeChange( newPeriod ) {
		const newTimeString = getTimeString(
			this.state.hours,
			this.state.minutes,
			newPeriod || this.state.period,
			this.props.name
		);

		this.props.onTimeChange( newTimeString  );
	}

	static getDerivedStateFromProps( nextProps ) {
		const timeInZone = nextProps.time;
		const hours = timeInZone.format( 'hh' );
		const minutes = timeInZone.format( 'mm' );
		const period = timeInZone.format( 'A' );

		return {
			hours, minutes, period
		};
	}

	render() {
		const hours = this.state.hours;
		const minutes = this.state.minutes;
		const period = this.state.period;

		return (
			<div className={ 'col-sm-4 col-xs-10 ' + styles.time }>
				<input
					maxLength="2"
					className={ styles.hours }
					type="text"
					value={ hours }
					onChange={ this.onHourChange }
					onBlur={ this.onInputBlur }
					onFocus={ this.onInputFocus }
					onKeyPress={ this.onKeyPress }
				/>
				:
				<input
					maxLength="2"
					className={styles.minutes}
					type="text"
					value={ minutes }
					onChange={ this.onMinutesChange }
					onBlur={ this.onInputBlur }
					onFocus={ this.onInputFocus }
					onKeyPress={ this.onKeyPress }
				/>
				<a className={ styles.period } onClick={ this.onPeriodToggle }>{ period }</a>
			</div>
		);
	}
}

function validateHour( newValue ) {
	const newIntValue = parseInt( newValue, 10 );

	return !( isNaN( newIntValue ) || newIntValue > 12 || newIntValue < 1 );
}

function validateMinutes( newValue ) {
	const newIntValue = parseInt( newValue, 10 );

	return  !( isNaN( newIntValue ) || newIntValue > 59 || newIntValue < 0 );
}
