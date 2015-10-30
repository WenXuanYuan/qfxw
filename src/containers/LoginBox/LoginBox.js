import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import request from 'superagent';
import { loginHandle } from 'constants/RouterConfig';

//import components
// import { message } from 'antd';

//import styles
import styles from './styles';

//Actions
import * as actionCreators from 'actions/login';

@connect(state => state.adminInfo)
export default class Login extends Component{

	static propTypes = {
		dispatch: PropTypes.func,
	}

	constructor(props){
		super(props);
		this.actions = bindActionCreators(actionCreators, this.props.dispatch);
	}

	state = {
		verifySrc: './public/images/verify.png',
		email: '1111@1.com',
		password: '111111',
		verify: '1111',
		emailInputPlaceholder: '您的登录邮箱',
		passwordInputPlaceholder: '您的密码',
		verifyInputPlaceholder: '验证码',
		emailCheck: true,
		passwordCheck: true,
		verifyCheck: true
	}

	updateEmail(e){
		this.setState({email: e.target.value});
	}

	updatePassword(e){
		this.setState({password: e.target.value});
	}

	updateVerify(e){
		this.setState({verify: e.target.value});
	}

	refreshVerify(){
		this.setState({verifySrc: 'http://qfplan.com/index.php/Admin/Verify.png?' + Math.random()});
	}

	checkEmail(e){

		let email = this.state.email;
		if(email == ''){
			e.target.value = '';
			this.setState({emailInputPlaceholder:'登录邮箱不能为空！',emailCheck:false});
			return ;
		}
		
		let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if(!re.test(email)){
			e.target.value = '';
			this.setState({emailInputPlaceholder:'邮箱格式不正确！',emailCheck:false});
		}
	}

	checkPassword(e){
		let password = this.state.password;
		if (password == '') {
			e.target.value = '';
			this.setState({passwordInputPlaceholder:'登录密码不能为空',passwordCheck:false});
			return ;
		}
		if (password.length < 6) {
			e.target.value = '';
			this.setState({passwordInputPlaceholder:'密码长度小于6位',passwordCheck:false});
		};

	}

	checkVerify(e){
		let verify = this.state.verify;
		if (verify == '') {
			e.target.value = '';
			this.setState({verifyInputPlaceholder:'验证码不能为空',verifyCheck:false});
			return ;
		};
		if (verify.length != 4) {
			e.target.value = '';
			this.setState({verifyInputPlaceholder:'验证码长度错误',verifyCheck:false});
		};
	}

	emailReset(e){
		e.target.value = this.state.email;
		this.setState({emailCheck:true});
	}

	passwordReset(e){
		e.target.value = this.state.password;
		this.setState({passwordCheck:true});
	}

	verifyReset(e){
		e.target.value = this.state.verify;
		this.setState({verifyCheck:true});
	}

	submitLoginData(){
		let { email, password, verify } = this.state;
		if ( email == '') {
			this.setState({emailCheck: false});
			return ;
		};
		if ( password == '') {
			this.setState({passwordCheck: false});
			return ;
		};
		if ( verify == '' ) {
			this.setState({verifyCheck: false});
			return ;
		};
		console.log(email,'====',password,'====',verify);
		request.post(loginHandle)
			.type('form')
			.send({email,password,verify})
			.end(function(err, res){
			if (!err) {
				let data = res.body;
				if (data.Code == 0) {
	        let { name, avator, email, phoneNum, gender, campous, address, navigation } = data.Data;
	        this.actions.loginSuccess( name, avator, email, phoneNum, gender, campous, address, navigation );
	      } else if(data.Code == 'email'){
	      	this.setState({emailCheck: false, emailInputPlaceholder: data.Msg});
	      } else if (data.Code == 'password'){
	      	this.setState({passwordCheck: false, passwordInputPlaceholder: data.Msg});
	      } else if (data.Code == 'verify'){
	      	this.setState({verifyCheck: false, verifyInputPlaceholder: data.Msg});
	      } else {
	        console.log('other error');
	      }
			} else {
				// message.error('发生了一些错误');
			}
		}.bind(this));
	}

	render(){
		return(
			<form className={`horizontal ${styles}`}>
				<div className="ant-form-item">
		            <label className="col-7" htmlFor="email">邮箱：</label>
		            <div className="col-12">
	                  <input className="ant-input" placeholder={this.state.emailInputPlaceholder} onKeyUp={this.updateEmail.bind(this)} onBlur={this.checkEmail.bind(this)} style={{borderColor:this.state.emailCheck?'#d9d9d9':'red'}} onFocus={this.emailReset.bind(this)}/>
		            </div>
		        </div>
				<div className="ant-form-item">
		            <label className="col-7" htmlFor="password">密码：</label>
		            <div className="col-12">
	                  <input className="ant-input" type="password" placeholder={this.state.passwordInputPlaceholder} onKeyUp={this.updatePassword.bind(this)} onBlur={this.checkPassword.bind(this)} style={{borderColor:this.state.passwordCheck?'#d9d9d9':'red'}} onFocus={this.passwordReset.bind(this)}/>
		            </div>
		        </div>
		        <div className="ant-form-item">
		            <label className="col-7" htmlFor="verify">验证码：</label>
		            <div className="col-12">
		            	<div className="col-14">
	                  		<input className="ant-input" placeholder={this.state.verifyInputPlaceholder} onKeyUp={this.updateVerify.bind(this)} onBlur={this.checkVerify.bind(this)} style={{borderColor:this.state.verifyCheck?'#d9d9d9':'red'}} onFocus={this.verifyReset.bind(this)}/>
		            	</div>
		            	<div className="col-10">
		            		<image className="verify" alt="验证码" title="点击刷新" src={this.state.verifySrc} onClick={this.refreshVerify.bind(this)}/>
		            	</div>
		            </div>
	          	</div>
	          	<div className='ant-form-item'>
	          		<button type='button' className='ant-btn ant-btn-ghost' onClick={this.submitLoginData.bind(this)}>登录</button>
	          		<a href="#">忘记密码?</a>
	          	</div>
			</form>
		);
	};
}