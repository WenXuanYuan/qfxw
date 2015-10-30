import React, { Component, PropTypes } from 'react';

import styles from './styles';

export default class TabNav extends Component{

	render(){
		return 	<ul className={`${styles}`}>
							<i className='anticon anticon-caret-left'></i>
							<li className='active'>
								<span>分类列表</span>
								<i className='anticon anticon-reload'></i>
								<i className='anticon anticon-cross-circle'></i>
							</li>
							<li>
								<span>分类列表</span>
								<i className='anticon anticon-reload'></i>
								<i className='anticon anticon-cross-circle'></i>
							</li>
							<li>
								<span>分类列表</span>
								<i className='anticon anticon-reload'></i>
								<i className='anticon anticon-cross-circle'></i>
							</li>
							<li>
								<span>分类列表</span>
								<i className='anticon anticon-reload'></i>
								<i className='anticon anticon-cross-circle'></i>
							</li>
							<li>
								<span>分类列表</span>
								<i className='anticon anticon-reload'></i>
								<i className='anticon anticon-cross-circle'></i>
							</li>
							<li>
								<span>分类列表</span>
								<i className='anticon anticon-reload'></i>
								<i className='anticon anticon-cross-circle'></i>
							</li>
							<i className='anticon anticon-caret-right'></i>
						</ul>
	}
}