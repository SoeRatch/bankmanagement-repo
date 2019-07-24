import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import SearchDisplay from '../../containers/SearchDisplay';
import styles from './index.css';
const cx = classNames.bind(styles);

class Bookmark extends React.Component{


	render(){
	 let {bookmarks,mobileview}=this.props;
		let bool=true;
	  return( 
	  		<div className={cx("bodyWrapper")}>
        		<SearchDisplay mobileview={mobileview} banks={bookmarks.data} bookmark={bool} />
			</div>
	  )
	}


}



function mapStateToProps(state){
  return{
   bookmarks:state.bookmarks
  };
}

export default connect(mapStateToProps)(Bookmark);