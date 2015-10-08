import React, { Component } from 'react';

//import styles
import styles from './styles';

//import component

export default class Login extends Component{
	render(){
		return(
			<form className={`horizontal ${styles}`}>
				<div className="ant-form-item">
		            <label className="col-7" htmlFor="email">邮箱：</label>
		            <div className="col-12">
	                  <input name="email" id="email" className="ant-input" placeholder="请输入您的登录邮箱" />
		            </div>
		        </div>
				<div className="ant-form-item">
		            <label className="col-7" htmlFor="password">密码：</label>
		            <div className="col-12">
	                  <input name="passwd" id="password" className="ant-input" type="password"/>
		            </div>
		        </div>
		        <div className="ant-form-item">
		            <label className="col-7" htmlFor="verify">验证码：</label>
		            <div className="col-12">
	                  <input name="verify" id="name" className="ant-input" placeholder="验证码" />
		            </div>
	          	</div>
	          	<div className='ant-form-item'>
	          		<button type='button' className='ant-btn ant-btn-ghost'>登录</button>
	          		<a href="#">忘记密码?</a>
	          	</div>
			</form>
		);
	};
}