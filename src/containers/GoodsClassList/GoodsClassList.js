import React, { Component, PropTypes } from 'react';
import { Tree, List } from 'components';


import styles from './styles';

export default class CoodsClassList extends Component{

	state = {
		bodyHeight: document.body.clientHeight,
		'goodsCateAttr':{},
		'goodsAttrValue':{}
	}

	_winResize(){
		this.setState({bodyHeight: document.body.clientHeight});
	}

	componentWillMount(){
		window.addEventListener('resize',this._winResize.bind(this));
	}

	treeExpandHandle(id){
		let ids = id.split('_'),
		next = this.state.goodsCategory,
		str = '';
		for ( let i = 0; i < ids.length; i++ ){
			str += ids[i];
			next = str == id ? next[str] : next[str].children;
			str += '_';
		}
		next.expand = !next.expand;
		this.setState({goodsCategory:this.state.goodsCategory});
	}

	_changeAttr(id){
		let ids = id.split('_'),
		str = '',
		next = this.state.goodsCategory;
		for ( let i = 0; i < ids.length; i++ ){
			str += ids[i];
			next = str == id ? next[str] : next[str].children;
			str += '_';
		}
		let attr = {}, attrValue = {};
		if (next.attr) {
			attr = next.attr;
			if (attr['1'] && attr['1'].value) {
				attrValue = attr['1'].value;
			};
		};
		this.setState({'goodsCateAttr':attr, 'goodsAttrValue':attrValue});
	}

	_changeAttrValue(id){
		let attr = this.state.goodsCateAttr;
		let attrValue = attr[id].value ? attr[id].value : {};
		this.setState({'goodsAttrValue': attrValue});
	}

	render(){

		let boxsHeight = {height: this.state.bodyHeight - 118, minHeight: '360px'};
		return 	<div className={`row ${styles}`}>
							<div className='col-7' style={boxsHeight}>
								<Tree structureData={this.state.goodsCategory} expandHandle={this.treeExpandHandle.bind(this)} showAttrList={this._changeAttr.bind(this)}/>
							</div>
							<div className='col-7 col-offset-1' style={boxsHeight}>
								<List structureData={this.state.goodsCateAttr} changeAttrValue={this._changeAttrValue.bind(this)}/>
							</div>
							<div className='col-7 col-offset-1' style={boxsHeight}>
								<List structureData={this.state.goodsAttrValue} />
							</div>
						</div>
	}
}