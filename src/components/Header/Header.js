import React, { Component, PropTypes } from 'react';

// Component styles
import styles from './styles';

class Header extends Component {
  
  _onScroll(){
    this.action.recordYOffset(window.pageYOffset);
  }
  
  componentDidMount(){
    window.addEventListener('scroll',this._onScroll);
  }

  render() {
    const { headState, adminName } = this.props;
    var adminInfo='';
    if(headState == 3){
      adminInfo = <div className='col-offset-17 col-4'>
                    <p className="admin"><a className="user" href="#"><i className="anticon anticon-user"></i>{adminName}</a>&nbsp;,&nbsp;欢迎回来&nbsp;!<a className="out" href="#">[退出]</a></p>
                  </div>;
    }
    return (
        <div className={`row ${styles}`} style={headState==1?{backgroundColor:'rgba(255,255,255,0.5)'}:{backgroundColor:'#FFF'}}>
          <div className='col-3'>
            <a href="http://qfplan.com" title="点击跳转到清风首页" target="_black">
              <svg viewBox="0 0 600 600" style={headState==1?{fill:'rgba(68,69,62,0.6)'}:{fill:'fill:rgba(68,69,62,0.6)'}}>
                <path strokeWidth="2" d="M228.9 145.6v20.6h66.6v15.2h-66.6v26h66v14.9h-66v28.4h68.7v14.9H144.7v-14.9H214v-28.4h-66.3v-14.9H214v-26h-66.6v-15.2H214v-20.6h14.9zm-78.8 276V305.7c0-18.8 10.8-21.2 24.2-21.2H268c13.4 0 24.2 2.4 24.2 21.2v95c0 18.8-10.8 21.2-24.2 21.2h-11.4V407H268c5.1 0 9.3-.9 9.3-6.3V383H165v38.5h-14.9zm14.9-95.3h112.3v-20.6c0-5.4-4.2-6.3-9.3-6.3h-93.8c-5.1 0-9.3.9-9.3 6.3v20.6zm0 41.8h112.3v-26.9H165v26.9z"></path>
                <path d="M331.2 421.9l12.5-239.6c1.2-20.6 12.5-26.3 28.4-26.3h104.5c15.8 0 28.1 5.4 28.1 26.6V398c0 9.6 6.3 11.9 13.4 11.9h12.5v14.9h-12.5c-14.9 0-28.4-5.7-28.4-26.9V182.6c0-9.3-5.7-11.6-13.1-11.6H372.1c-7.2 0-12.5 3-13.4 11.9l-12.5 239.6-15-.6zm58-210l36.4 71.1c9.9-23.3 17.6-48.4 24.2-76.2l14.6 3.3c-8.1 33.2-17.9 62.7-30.2 89.9l43.9 85.1-13.4 6.6-38.5-74.7c-13.7 27.5-29.9 52.3-48.7 75.6l-11.9-9.3c20.6-25.1 37.9-52.3 52.3-82.7l-42.1-82.1 13.4-6.6z"></path>
                <path strokeWidth="14" d="M79 171c0 34.3 22.4 62 50 62M78.9 246c0 34.3 22.4 62 50 62M78.9 333c0 34.3 22.4 62 50 62"></path>
              </svg>
            </a>
          </div>
          { adminInfo }
        </div>
    );
  }
}

Header.propTypes = {
  headState: PropTypes.number.isRequired,
  adminName: React.PropTypes.string
};

export default Header;