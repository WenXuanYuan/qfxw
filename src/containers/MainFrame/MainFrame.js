import React,{ Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginPage } from 'constants/RouterConfig';

import { Header, NavBar, LeftBar, TabNav } from 'components';

import styles from './styles';

import * as actionCreators from 'actions/login';

@connect(state => state.adminInfo)
export default class MainFrame extends Component{

	static propTypes = {
		dispatch: PropTypes.func,
	}

	constructor(props){
		super(props);
		this.actions = bindActionCreators(actionCreators, this.props.dispatch);
	}

	state = {
		leftBarShowWindow: true,
		bodyHeight: document.body.clientHeight,
	}

	switchLeftBar(){
		this.setState({leftBarShowWindow:!this.state.leftBarShowWindow});
	}

	winChange(){
		this.setState({bodyHeight: document.body.clientHeight});
	}

	componentWillMount(){
		document.body.style.overflow = 'hidden';
		if (this.props.adminInfo.name == '') {
			window.location.href = loginPage;
		};
		window.addEventListener('resize',this.winChange.bind(this));
	}

	render(){
		return 	<div className={`${styles}`}>
					<div className='row headerBox'>
						<Header adminName={this.props.adminInfo.name} />
					</div>
					<div className='row navBarBox'>
						<NavBar />
					</div>
					<div className='row'>
						<div className={this.state.leftBarShowWindow?'col-4 leftBarBox':'leftBarClose'} style={{height:this.state.bodyHeight - 74}}>
							<LeftBar showWindow={this.state.leftBarShowWindow}/>
							<i className={this.state.leftBarShowWindow?'leftBarSwitch leftBarSwitchOpenLeft anticon anticon-step-backward':'leftBarSwitch leftBarSwitchCloseLeft anticon anticon-step-forward'} onClick={this.switchLeftBar.bind(this)}></i>
						</div>
						<div className={this.state.leftBarShowWindow?'col-20':'mainBoxMaxWidth'}>
							<div className='row TabNavBox'>
								<TabNav />
							</div>
							<div className='row contentBox' style={{height:this.state.bodyHeight - 96}}>
								{ this.props.children }
							</div>
						</div>
					</div>
				</div>
	}
}