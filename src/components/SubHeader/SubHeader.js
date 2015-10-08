import React , { Component } from 'react';
import styles from './styles';

export default class CoreIdeaHeader extends Component {
	render(){
		return(
			<div className={`row ${styles}`}>
				<h1>清风计划，物尽其用</h1>
			</div>
		);
	}
}