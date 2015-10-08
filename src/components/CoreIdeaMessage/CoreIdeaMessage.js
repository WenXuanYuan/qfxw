import React , { Component } from 'react';

// import styles
import styles from './styles';

export default class extends Component {
	render(){
		return (
			<div className={`${styles}`}>
				<h2>做一个有价值的人</h2>
				<p>人，总要为自己树立一个进取的目标，</p>
				<p>人，总要在苍茫宇宙中找到自己的位置，</p>
				<p>万水千山，有些人从未停止探索，</p>
				<p>踏破铁鞋，有些人终其一生仍在寻觅，</p>
				<p>恍惊起时发现，有意义的事情总要有人来做，</p>
				<p>而这正是价值所在，</p>
				<p>未曾可知，你是否找到？</p>
			</div>
		);
	}
}