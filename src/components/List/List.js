import React, { Component, PropTypes } from 'react';
import { Modal, Popconfirm, message } from 'antd';

import styles from './styles';

export default class List extends Component{

	static propTypes = {
		structureData: PropTypes.object,
		changeAttrValue: PropTypes.func,
	}

	state = {
		modalTitle: '',
		modalVisible: false,
		currentItemId: '',
	}

	deleteItem(id){
		message.success('删除成功');
	}

	cancelHandle(msg){
		message.error(msg + '操作已取消');
	}

	cancelModalHandle(msg){
		this.setState({'modalTitle':'','modalVisible':false});
		this.cancelHandle(msg);
	}

	modalOkHandle(){
		console.log('ssdsdsdd');
	}

	updateItem(id, name){
		this.setState({'currentItemId':id,'modalTitle':'更新《' + name + '》', 'modalVisible':true});
	}

	_createItem(key, value){
		return	<li key={key} onClick={this.props.changeAttrValue ? ()=>this.props.changeAttrValue(key) : ''}>
							<p>{value.name}</p>
							<If condition={value.btn.delete}>
								<Popconfirm title={'确定要删除该项吗？'} onConfirm={this.deleteItem.bind(this,key)} onCancel={this.cancelHandle.bind(this,'删除')}>
									<i className='anticon anticon-cross-circle' title='删除' />
								</Popconfirm>
							</If>
							<If condition={value.btn.update}>
								<i onClick={this.updateItem.bind(this,key,value.name)} className='anticon anticon-edit' title='修改' />
							</If>
						</li>
	}

	_ergodicItem(obj){
		if (!obj) {
			return false;
		};
		let items = [];
		for ( let index in obj ){
			items.push(this._createItem(index, obj[index]));
		}
		return items;
	}

	render(){
		return 	<div className={`${styles}`}>
							<ul>
								{this._ergodicItem(this.props.structureData)}
							</ul>
							<Modal title={this.state.modalTitle} visible={this.state.modalVisible} onOk={this.modalOkHandle.bind(this)} onCancel={this.cancelModalHandle.bind(this,'修改')}>
								<div className="ant-form-item">
							    <label htmlFor="cate-input" className="col-6" style={{marginTop:'4px'}}>新值：</label>
							    <div className="col-14">
							      <input type="text" className="ant-input" id="cate-input" placeholder='新值' />
							    </div>
							  </div>
							</Modal>
						</div>
	}
}