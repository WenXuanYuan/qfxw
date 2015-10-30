treeData format:

treeData = [{
	id: '1',
	name: '1',
	state: '1',
	expand: 'true',
	btn: ['create','update','delete','close'],
	child: [
		{id: '1-1', name:'1-1', state:'0', expand: true, btn: ['create','update','delete','open'], child: [
			{id:'1-1-2',name:'1-1-2', state: '1',expand: false, btn:['update','delete','close']},
			{id:'1-1-2',name:'1-1-2', state: '0',expand: true, btn:['update','delete','open']},
		]}
	]
}]