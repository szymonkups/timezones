import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import styles from './TimeInput.css';
import { getTimeString } from '../../utils/timezones';

/**
 * Time input displaying [HH:MM AM/PM] on each timezone displayed.
 */
export default class TimeInput extends Component {
	static propTypes = {
		time: PropTypes.object.isRequired,
		name: PropTypes.string.isRequired,
		onTimeChange: PropTypes.func.isRequired
	};

	state = {};

	/**
	 * Called each time the hour input is entered.
	 * It validates input data and sets component's state with new hours value.
	 */
	onHourChange = event => {
		if ( !validateHour( event.target.value ) ) {
			return;
		}

		this.setState( {
			hours: event.target.value
		} );
	};

	/**
	 * Called each time the minute input is entered.
	 * It validates input data and sets component's state with new minutes value.
	 */
	onMinutesChange = event => {
		if ( !validateMinutes( event.target.value ) ) {
			return;
		}

		this.setState( {
			minutes: event.target.value
		} );
	};

	/**
	 * Fired when keyboard key is pressed inside input. Executes time change when Enter key is pressed.
	 */
	onKeyPress = event => {
		if ( event.key === 'Enter' ) {
			this.handleTimeChange();
		}
	};

	/**
	 * Fired when input is focused - selects all the content inside.
	 */
	onInputFocus = event => {
		event.target.select();
	};

	/**
	 * When input is blurred we update current time.
	 */
	onInputBlur = () => {
		this.handleTimeChange();
	};

	/**
	 * Called when AM/PM period is changed.
	 */
	onPeriodToggle = () => {
		const currentPeriod = this.state.period;
		const newPeriod = currentPeriod === 'AM' ? 'PM' : 'AM';
		this.setState( { period: newPeriod } );

		this.handleTimeChange( newPeriod );
	};

	/**
	 * Calls props.onTimeChange function with new time provided.
	 */
	handleTimeChange( newPeriod ) {
		const newTimeString = getTimeString(
			this.state.hours,
			this.state.minutes,
			newPeriod || this.state.period,
			this.props.name
		);

		this.props.onTimeChange( newTimeString  );
	}

	/**
	 * Updates state each time hour, minutes, period props of this component are change.
	 */
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

/**
 * Validates hours string.
 *
 * @param newValue
 * @return {boolean}
 */
function validateHour( newValue ) {
	const newIntValue = parseInt( newValue, 10 );

	return !( isNaN( newIntValue ) || newIntValue > 12 || newIntValue < 1 );
}

/**
 * Validates minutes string.
 *
 * @param newValue
 * @return {boolean}
 */
function validateMinutes( newValue ) {
	const newIntValue = parseInt( newValue, 10 );

	return  !( isNaN( newIntValue ) || newIntValue > 59 || newIntValue < 0 );
}
