import React, { Component, PropTypes } from 'react';
import { Collapse } from 'antd';
let { Panel } = Collapse;

import styles from './styles';

export default class LeftNav extends Component{

	static propTypes = {
		showWindow: PropTypes.bool,
	}

	render(){
		return 	<div className={`${styles}`} style={{display:this.props.showWindow?'block':'none'}}>
							<Collapse defaultActiveKey={["1"]}>
						    <Panel header={`分类管理`} key="1">
						      <ul>
						      	<li className='active'>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						    <Panel header={`分类管理`} key="2">
						      <ul>
						      	<li>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						    <Panel header={`分类管理`} key="3">
						      <ul>
						      	<li>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						    <Panel header={`分类管理`} key="4">
						      <ul>
						      	<li>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						    <Panel header={`分类管理`} key="5">
						      <ul>
						      	<li>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						    <Panel header={`分类管理`} key="6">
						      <ul>
						      	<li>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						    <Panel header={`分类管理`} key="7">
						      <ul>
						      	<li>分类列表</li>
						      	<li>添加分类</li>
						      </ul>
						    </Panel>
						  </Collapse>
						 </div>
	}
}