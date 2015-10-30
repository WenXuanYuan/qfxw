import React, { Component, PropTypes } from 'react';
import { Modal, Popconfirm, message } from 'antd';

import styles from './styles';

export default class Tree extends Component{

	static propTypes = {
		structureData: PropTypes.object,
		expandHandle: PropTypes.func,
		showAttrList: PropTypes.func,
	}

	state = {
		'modalVisible': false,
		'modalTitle': '',
		'currentHandleId':'',
		'modalInputPlaceholer':'',
		'modalInputValue':''
	}

	createCate(id){
		this.setState({'modalVisible':true,'modalTitle':'添加子分类','currentHandleId':id,'modalInputPlaceholer':'填写自分类名称'});
	}

	switchStatus(id, status){
		message.success('操作成功');
	}

	updateCate(id, name){
		this.setState({'modalVisible': true, 'modalTitle':'修改分类','currentHandleId':id, 'modalInputPlaceholer':name});
	}

	deleteCate(id){
		message.success('已成功删除');
	}

	handlePopconfirmCancel(msg){
		message.error(msg + '操作已取消');
	}

	_nodeCreate(value, key){
		return	<li key={key} className={`${styles}`}>
							<div onClick={this.props.showAttrList.bind(this,key)}>
								<If condition={value.btn.expand}>
									<If condition={value.expand}>
										<i onClick={() => this.props.expandHandle(key)} className='anticon anticon-caret-down'></i>
									<Else />
										<i onClick={() => this.props.expandHandle(key)} className='anticon anticon-caret-right'></i>
									</If>
								</If>
								<p>{value.name}</p>
								<span>
									<If condition={value.btn.create}>
										<i onClick={this.createCate.bind(this,key)} className='anticon anticon-plus-circle-o' title='添加'></i>
									</If>
									<If condition={value.btn.switch}>
										<If condition={value.status}>
											<Popconfirm title={"确定要关闭《" + value.name + "》这个分类吗？"} onConfirm={this.switchStatus.bind(this,key,false)} onCancel={this.handlePopconfirmCancel.bind(this,'关闭')}>
												<i className='anticon anticon-poweroff' title='关闭'></i>
										  </Popconfirm>
										<Else/>
											<Popconfirm title={"确定要开启《" + value.name + "》这个分类吗？"} onConfirm={this.switchStatus.bind(this,key,true)} onCancel={this.handlePopconfirmCancel.bind(this,'打开')}>
												<i onClick={this.switchStatus.bind(this,key)} className='anticon anticon-logout' title='打开'></i>
										  </Popconfirm>
										</If>
									</If>
									<If condition={value.btn.update}>
										<i onClick={this.updateCate.bind(this,key,value.name)} className='anticon anticon-edit' title='修改'></i>
									</If>
									<If condition={value.btn.delete}>
										<Popconfirm title={"确定要删除《" + value.name + "》这个分类以及其子分类吗？"} onConfirm={this.deleteCate.bind(this,key)} onCancel={this.handlePopconfirmCancel.bind(this,'删除')}>
											<i className='anticon anticon-cross-circle' title='删除'></i>
									  </Popconfirm>
									</If>
								</span>
							</div>
							<If condition={value.expand}>
								{value.children?this._treeCreate(value.children):''}
							</If>
						</li>
	}

	_ergodicNode(obj){
		let item = [];
		for ( let key in obj){
			item.push(this._nodeCreate(obj[key],key));
		}
		return item;
	}

	_treeCreate(obj){
		if (!obj) {
			return ;
		};
		let treeNode = this._ergodicNode(obj);
		return	<ul style={{marginLeft:'16px'}}>
							{treeNode}
						</ul>
	}

	handleOk(){
		console.log('ok');
	}

	handleModalCancel(){
		this.setState({'modalVisible':false,'currentHandleId':''});
	}

	render(){
		return	<div>
							{this._treeCreate(this.props.structureData)}
							<Modal title={this.state.modalTitle} visible={this.state.modalVisible} onOk={this.handleOk.bind(this)} onCancel={this.handleModalCancel.bind(this)}>
								<div className="ant-form-item">
							    <label htmlFor="cate-input" className="col-6" style={{marginTop:'4px'}}>分类名：</label>
							    <div className="col-14">
							      <input type="text" className="ant-input" id="cate-input" placeholder={this.state.modalInputPlaceholer} />
							    </div>
							  </div>
				      </Modal>
						</div>
	}
}