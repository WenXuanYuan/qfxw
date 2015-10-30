import React, { Component, PropTypes } from 'react';
import { Tree, List } from 'components';


import styles from './styles';

export default class CoodsClassList extends Component{

	state = {
		bodyHeight: document.body.clientHeight,
		goodsCategory: {
			'1': {name:'数码电子', status: true, expand: true, btn:{expand:true,create:true, update: true, delete: true, switch: true}, children:{
				'1_1':{name:'手机/手机周边', status: true, expand:false, btn:{expand:true,create: true, update: true, delete:true, switch:true},children:{
					'1_1_1':{name:'手机', status: true, expand:true, btn:{expand:false, create:false, update:true, delete:true, switch:true},'attr':{
						'1':{'name':'屏幕尺寸','value':{
							'1':{'name':'10英寸','btn':{'update':true,'delete':true}},
							'2':{'name':'9英寸','btn':{'update':true,'delete':true}},
							'3':{'name':'8英寸','btn':{'update':true,'delete':true}},
							'4':{'name':'7英寸','btn':{'update':true,'delete':true}},
							'5':{'name':'6英寸','btn':{'update':true,'delete':true}},
						},'btn':{'update':true,'delete':true}},
						'2':{'name':'品牌','value':{
							'1':{'name':'苹果','btn':{'update':true,'delete':true}},
							'2':{'name':'小米','btn':{'update':true,'delete':true}},
							'3':{'name':'华为','btn':{'update':true,'delete':true}},
							'4':{'name':'三星','btn':{'update':true,'delete':true}},
							'5':{'name':'中兴','btn':{'update':true,'delete':true}},
						},'btn':{'update':true,'delete':true}},
					}},
					'1_1_2':{name:'充电器', status: true, expand:true, btn:{expand:false, create:false, update:true, delete:true, switch:true}}
					}, 'attr':{
						'1':{'name':'大小','value':{
							'1':{'name':'大物件','btn':{'update':true,'delete':true}},
							'2':{'name':'中物件','btn':{'update':true,'delete':true}},
							'3':{'name':'小物件','btn':{'update':true,'delete':true}},
						},'btn':{'update':true,'delete':true}}
					}
				},
				'1_2':{name:'电脑/电脑周边', status: true, expand:true, btn:{expand:true,create: true, update: true, delete:true, switch:true},children:{
					'1_2_1':{name:'电脑', status: true, expand:true, btn:{expand:false, create:false, update:true, delete:true, switch:true}},
					'1_2_2':{name:'U盘', status: true, expand:true, btn:{expand:false, create:false, update:true, delete:true, switch:true}}
					}
				}
			},'attr':{
				'1':{'name':'新旧程度', 'value':{
					'1':{'name':'9成新','btn':{'update':true,'delete':true}},
					'2':{'name':'8成新','btn':{'update':true,'delete':true}},
					'3':{'name':'7成新','btn':{'update':true,'delete':true}},
					'4':{'name':'6成新','btn':{'update':true,'delete':true}},
				},'btn':{'update':true,'delete':true}},
				'2':{'name':'购买时间', 'value':{
					'1':{'name':'2016','btn':{'update':true,'delete':true}},
					'2':{'name':'2015','btn':{'update':true,'delete':true}},
					'3':{'name':'2014','btn':{'update':true,'delete':true}},
					'4':{'name':'2013','btn':{'update':true,'delete':true}},
				},'btn':{'update':true,'delete':true}},
			}}
		},
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