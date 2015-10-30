import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

//styles
import styles from './styles';
//actions
import * as actionCreators from 'actions/login'; 
import { goodsClassPage } from 'constants/RouterConfig';
//components
import { Header, SubHeader, CoreIdeaMessage, Footer } from 'components';
import { LoginBox } from 'containers';

@connect(state => state.adminInfo)
export default class LoginSection extends Component {

	static propTypes = {
		dispatch: PropTypes.func,
 	}

	constructor(props) {
		super(props);
		this.actions = bindActionCreators(actionCreators, this.props.dispatch);
	}

	componentWillMount(){
    // Dev: judge the state of administor
    if (this.props.adminInfo.name != '') {
    	window.location.href = goodsClassPage;
    };
	}
	
	render(){

		const { adminInfo } = this.props;
    const metaData = {
      title: '清风后台登录',
      description: '清风管理员登录界面',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: '',
        },
      },
    };

		return (
			<section className={`${styles}`}>
				<DocumentMeta {...metaData} />
				<div className='row header'>
					<Header adminName={adminInfo.name}/>
				</div>
				<SubHeader />
				<div className='row main'>
					<div className='col-14'>
						<CoreIdeaMessage />
					</div>
					<div className='col-10'>
						<div className='row-flex row-flex-center'>
							<img src='./public/images/logoWithText.png' />
						</div>
						<LoginBox />
					</div>
				</div>
				<div className='row footer'>
					<Footer />
				</div>
			</section>
		);
	}
}