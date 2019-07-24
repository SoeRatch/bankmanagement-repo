import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames/bind';
import BodyContainer from '../../containers/BodyContainer';
import styles from './index.css';
const cx = classNames.bind(styles);

class Home extends React.Component{


	render(){
		const {classes,mobileview,...rest}=this.props;
		return(
			<div className={cx("wrapper")}>
				 <div className={cx("mainpanel")}>
		              <BodyContainer mobileview={mobileview} />
        		</div>
        		
			</div>
			);
	}
}



export default Home;