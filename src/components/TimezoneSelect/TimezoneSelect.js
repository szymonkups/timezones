import React, { Component } from 'react';
import { getAllTimezones } from '../../utils/timezones';
import styles from './TimezoneSelect.css';
const zones = getAllTimezones();

/**
 * Component responsible for selecting new timezone.
 */
export default class TimezoneSelect extends Component {
	state = {
		selectedTimezone: zones[ 0 ]
	};

	/**
	 * Called when a timezone in input select is changed.
	 */
	onTimezoneChange = event => {
		this.setState( {
			selectedTimezone: event.target.value
		} )
	};

	/**
	 * Called when a timezone is selected and "Add timezone" button is pressed.
	 */
	onTimezoneAdd = event => {
		event.preventDefault();

		this.props.onAdd( this.state.selectedTimezone );
	};

	render() {
		const allTimezones = zones
			.map( name => <option key={ name } value={ name }>{ name }</option> );

		return (
			<div className="row">
				<form className={ 'col-md-6 col-md-offset-3 ' + styles.form }>
					<select className="col-sm-8 col-xs-12" value={ this.state.selectedTimezone } onChange={ this.onTimezoneChange } >
						{ allTimezones }
					</select>
					<button className="col-sm-4 col-xs-12" type="submit" onClick={ this.onTimezoneAdd }>
						Add timezone
					</button>
				</form>
			</div>
		);
	}
}


