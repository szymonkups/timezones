import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimezoneList from '../../components/TimezoneList/TimezoneList';
import Header from '../../components/Header/Header'

import { add as addTimezone, remove as removeTimezone } from './../../actions/timezones';
import { setNew as setNewTime, } from './../../actions/time';
import { getAllTimezones } from '../../utils/timezones';
const zones = getAllTimezones();

class App extends Component {
	state = {
		selectedTimezone: zones[ 0 ]
	};

	onTimezoneChange = event => {
		this.setState( {
			selectedTimezone: event.target.value
		} )
	};

	onTimezoneAdd = event => {
		this.props.addTimezone( this.state.selectedTimezone );
		event.preventDefault();
	};

	onTimezoneRemove = name => {
		this.props.removeTimezone( name );
	};

	onTimeChange = time => {
		this.props.setNewTime( time );
	};

	render() {
		const currentTime = this.props.currentTime;
		const selectedTimezones = this.props.selectedTimezones;

		// TODO: set currently selected timezone after removal.
		const allTimezones = zones
			.filter( name => !selectedTimezones.includes( name ) )
			.map( name => <option key={ name } value={ name }>{ name }</option> );

		return (
			<div className="container-fluid">
				<Header />
				<TimezoneList
					timezones={ selectedTimezones }
					time={ currentTime }
					onRemove={ this.onTimezoneRemove }
					onTimeChange={ this.onTimeChange }
				/>
				<form onSubmit={ this.onTimezoneAdd }>
					<select value={ this.state.selectedTimezone } onChange={ this.onTimezoneChange } >
						{ allTimezones }
					</select>
					<input type="submit" value="Add timezone" />
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ( {
	currentTime: state.time,
	selectedTimezones: state.timezones
} );

const mapDispatchToProps = dispatch => ( {
	addTimezone: bindActionCreators( addTimezone, dispatch ),
	removeTimezone: bindActionCreators( removeTimezone, dispatch ),
	setNewTime: bindActionCreators( setNewTime, dispatch )
} );

export default connect( mapStateToProps, mapDispatchToProps )( App );
