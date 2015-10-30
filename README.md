# qfxw
this is not qf`s app

# data structure of store

adminInfo: {
	name: 'wenke',
	avator: 'url for wenke`s avator',
	email: 'wenke@qfplan.com',
	gender: '男',
	campous: '同济大学嘉定校区',
	address: '上海市嘉定区曹安公路4800号',
	phoneNum: '121212121121',
	navigation: [
		{id:'1',name:'物品管理',child:[
			{id:'1-1',name:'分类管理',child:[
				{id:'1-1-1',name:'分类列表',link:'goods/class'},
				{id:'1-1-2',name:'创建分类',link:'goods/calss/create'},
			]},
		]},	
	]
}

goodsCategory: [
	{id:'1', name:'数码电子', status: true, expand:true,btn:{expand:true,create:true, update: true, delete: true, switch: true}, children: [
		{id:'1-1',name:'手机/手机周边', status: true,expand:true, btn:{expand:true,create: true, update: true, delete:true, switch:true},children:[
			{id:'1-1-1',name:'手机', status: true,btn:{expand:false,create:false, update: true, delete:true, switch:true}},
			{id:'1-1-2',name:'充电器', status: false,btn:{expand:false,create:false, update: true, delete:true, switch:true}},
		]}
	]}
]

goodsCategory: {
	'1': {name:'数码电子', status: true, expand: true, btn:{expand:true,create:true, update: true, delete: true, switch: true}, children:{
		'1_1':{name:'手机/手机周边', status: true, expand:true, btn:{expand:true,create: true, update: true, delete:true, switch:true},children:{
			'1_1_1':{name:'手机', status: true, expand:true, btn:{expand:false, create:true, update:true, delete:true, switch:true}},
			'1_1_2':{name:'充电器', status: true, expand:true, btn:{expand:false, create:true, update:true, delete:true, switch:true}}
			}
		},
		'1_2':{name:'电脑/电脑周边', status: true, expand:true, btn:{expand:true,create: true, update: true, delete:true, switch:true},children:{
			'1_2_1':{name:'电脑', status: true, expand:true, btn:{expand:false, create:true, update:true, delete:true, switch:true}},
			'1_2_2':{name:'U盘', status: true, expand:true, btn:{expand:false, create:true, update:true, delete:true, switch:true}}
			}
		}
	}}
}

navigation: [
	{id:'1',name:'物品管理',child:[
		{id:'1-1',name:'分类管理',child:[
			{id:'1-1-1',name:'分类列表',link:'goods/class'},
			{id:'1-1-2',name:'创建分类',link:'goods/calss/create'},
		]},
	]},	
]