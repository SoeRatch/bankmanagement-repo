import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from './index.css';
import SearchDisplay from '../SearchDisplay';


const cx = classNames.bind(styles);




class BodyContainer extends React.Component{
	
	render(){
		let {banks,mobileview}=this.props;
		return(
			<div className={cx("bodyWrapper")}>
				{banks && <SearchDisplay mobileview={mobileview} banks={banks} />}
			</div>
			);
	}
}


function mapStateToProps(state){
  return{
   banks:state.banks
  };
}

export default connect(mapStateToProps)(BodyContainer);