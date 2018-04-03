import React from 'react';
import styles from './Header.css';

export default () => (
	<header className={ styles.header }>
		<i className={ 'fas fa-clock ' + styles.logo }></i>
		Timezone converter
	</header>
);
