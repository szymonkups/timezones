import React, { Component } from 'react';
import { connect } from 'react-redux';

import Timezone from './../../components/Timezone/Timezone';

class App extends Component {
	render() {
		const currentTime = this.props.currentTime;
		const selectedTimezones = this.props.selectedTimezones;
		const timezones = selectedTimezones.map( timezone =>
			<Timezone key={ timezone.id } name={ timezone.name } time={ currentTime } />
		);

		return (
			<div>
				<h1>Timezone converter</h1>
				<ul>{ timezones }</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ( {
	currentTime: state.time,
	selectedTimezones: state.timezones
} );

export default connect( mapStateToProps )( App );
