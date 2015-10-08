import React, { Component } from 'react';

// Component styles
import styles from './styles.js';

export default class Footer extends Component {
  render() {
    return (
      <div className={`${ styles }`}>
        <div className='col-8'>
        	<dl className="row">
        		<dt>相关网站</dt>
        		<dd>
        			<a href='http://www.qfplan.com'>清风首页</a>
        			<a href='http://mail.qfplan.com'>企业邮箱</a>
        		</dd>
        	</dl>
        </div>
        <div className="col-16">
        	<dl className="row">
        		<dt>友情链接</dt>
        		<dd>
        			<a href="http://www.tongji.edu.cn">同济首页</a>
        			<a href="http://youth.tongji.edu.cn">同济创业谷</a>
        		</dd>
        	</dl>
        </div>
        <div className="col-24">
        	<p>沪ICP备14028921号-2 Copyright © 2015 清风</p>
        </div>
      </div>
    );
  }
}
