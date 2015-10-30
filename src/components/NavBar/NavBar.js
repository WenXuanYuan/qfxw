import React, { Component, PropTypes } from 'react';

import styles from './styles';

export default class NavBar extends Component{
	render(){
		return 	<ul className={`${styles}`}>
					<li>
						<i className="anticon anticon-home"></i>
						<span>后台首页</span>
					</li>
					<li>
						<i className="anticon anticon-area-chart"></i>
						<span>统计分析</span>
					</li>
					<li>
						<i className="anticon anticon-appstore"></i>
						<span>物品管理</span>
					</li>
					<li>
						<i className="anticon anticon-picture"></i>
						<span>用户管理</span>
					</li>
					<li>
						<i className="anticon anticon-file-text"></i>
						<span>财务管理</span>
					</li>
					<li>
						<i className="anticon anticon-setting"></i>
						<span>系统设置</span>
					</li>
				</ul>
	}
}