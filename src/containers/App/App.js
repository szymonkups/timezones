import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimezoneList from '../../components/TimezoneList/TimezoneList';
import Header from '../../components/Header/Header';
import TimezoneSelect from '../../components/TimezoneSelect/TimezoneSelect';

import { add as addTimezone, remove as removeTimezone } from './../../actions/timezones';
import { setNew as setNewTime, } from './../../actions/time';

export class App extends Component {
	/**
	 * Called each time a timezone is added.
	 */
	onTimezoneAdd = timezone => {
		this.props.addTimezone( timezone );
	};

	/**
	 * Called each time a timezone is removed.
	 */
	onTimezoneRemove = name => {
		this.props.removeTimezone( name );
	};

	/**
	 * Called when currently displayed time should be changed.
	 */
	onTimeChange = time => {
		this.props.setNewTime( time );
	};

	render() {
		const currentTime = this.props.currentTime;
		const selectedTimezones = this.props.selectedTimezones;

		return (
			<div className="container-fluid">
				<Header />
				<TimezoneList
					timezones={ selectedTimezones }
					time={ currentTime }
					onRemove={ this.onTimezoneRemove }
					onTimeChange={ this.onTimeChange }
				/>
				<TimezoneSelect
					onAdd={ this.onTimezoneAdd }
				/>
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
