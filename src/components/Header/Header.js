import React from 'react';
import styles from './Header.css';

/**
 * Header component - displays top bar and application title.
 */
export default () => (
	<header className={ styles.header }>
		<i className={ 'fas fa-clock ' + styles.logo }></i>
		Timezone converter
	</header>
);
