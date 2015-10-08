import React , { Component } from 'react';
//config
import { adminUrl } from '../../config';
//styles
import styles from './styles';
//components
import { Header, SubHeader, CoreIdeaMessage, LoginBox, Footer } from '../../components';
// import Header from '../Header/Header';
// import SubHeader from '../SubHeader/SubHeader';
// import CoreIdeaMessage from '../CoreIdeaMessage/CoreIdeaMessage';
// import LoginBox from '../LoginBox/LoginBox';
// import Footer from '../Footer/Footer';

export default class LoginSection extends Component {
	render(){
		return (
			<section className={`${styles}`}>
				<div className='row header'>
					<Header />
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